import React from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as flashcardSetsActions from '../actions/flashcardSetsActions';
import toastr from 'toastr';

import FlashcardSetNavbar from "../components/FlashcardSetNavbar";
import FlashcardList from '../../flashcard/components/FlashcardList';
import NewFlashcard from '../../flashcard/components/NewFlashcard';
import LoadingBar from '../../app/components/LoadingBar';
import findFlashcardSetById from "../proxy/findFlashcardSetById";
import {withRouter} from 'react-router-dom';

export class FlashcardSetContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newFlashcard: Object.assign({}, props.newFlashcard),
      resetNewFlashcardKey: 0,
      flashcardSetId: this.props.match.params.flashcardSetId,
      goBack: this.props.history.goBack
    };

    this.updateFlashcardState = this.updateFlashcardState.bind(this);
    this.saveFlashcard = this.saveFlashcard.bind(this);
    this.deleteFlashcard = this.deleteFlashcard.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  newFlashcardIsValid() {
    if (!this.state.newFlashcard.question || !this.state.newFlashcard.answer) {
      toastr.warning("You cannot add empty flashcard");
      return false;
    }
    return true;
  }

  updateFlashcardState(event) {
    const field = event.target.name;
    let newFlashcard = Object.assign({}, this.state.newFlashcard);
    newFlashcard[field] = event.target.value;
    return this.setState({newFlashcard: newFlashcard});
  }

  saveFlashcard(event) {
    event.preventDefault();

    if (!this.newFlashcardIsValid()) {
      return;
    }

    this.props.actions.saveFlashcardInSet(this.state.newFlashcard, this.state.flashcardSetId);
    this.setState({resetNewFlashcardKey: this.state.resetNewFlashcardKey + 1});
    toastr.success("Fishky saved!");
  }

  deleteFlashcard(flashcard) {
    this.props.actions.deleteFlashcardFromSet(flashcard, this.state.flashcardSetId);
    toastr.success("Flashcard has been removed");
  }

  goBack() {
    this.state.goBack();
  }

  render() {
    const {flashcardSets, loadingFlashcardSets} = this.props;
    const flashcardSet = findFlashcardSetById(flashcardSets,
      this.state.flashcardSetId);

    return (
      <div>
        {flashcardSet && <FlashcardSetNavbar
          flashcardSetName={flashcardSet.name}
          goBack={this.goBack}
        />
        }
        <div key={this.state.resetNewFlashcardKey}>
          <NewFlashcard
            onSave={this.saveFlashcard}
            onChange={this.updateFlashcardState}
          />
        </div>
        {flashcardSet && <FlashcardList
          flashcards={flashcardSet.flashcards}
          onDelete={this.deleteFlashcard}/>}
        {loadingFlashcardSets && <LoadingBar/>}
      </div>
    )
  }
}

FlashcardSetContainer.propTypes = {
  flashcardSets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  loadingFlashcardSets: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  flashcardSets: state.flashcardSets,
  actions: PropTypes.object.isRequired,
  loadingFlashcardSets: state.loadingFlashcardSets
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(flashcardSetsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FlashcardSetContainer))
