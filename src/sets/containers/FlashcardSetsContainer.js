import React from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as flashcardActions from '../actions/flashcardSetsActions';

import LoadingBar from '../../app/components/LoadingBar';
import FlashcardSetsList from "../components/FlashcardSetsList";
import toastr from "toastr";

export class FlashcardSetsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newFlashcardSet: Object.assign({}, props.newFlashcardSet),
      resetNewFlashcardSetKey: 0//TODO(Damian.Szwed) bedzie to potrzebne?
    };

    this.updateFlashcardSetState = this.updateFlashcardSetState.bind(this);
    this.saveFlashcardSet = this.saveFlashcardSet.bind(this);
    this.deleteFlashcardSet = this.deleteFlashcardSet.bind(this);
  }

  newFlashcardSetIsValid() {
    if (!this.state.newFlashcardSet.name) {
      toastr.warning("Please specify name of the fishky set");
      return false;
    }
    return true;
  }

  updateFlashcardSetState(event) {
    const field = event.target.name;
    let newFlashcardSet = Object.assign({}, this.state.newFlashcard);
    newFlashcardSet[field] = event.target.value;
    return this.setState({newFlashcardSet: newFlashcardSet});
  }

  saveFlashcardSet(event) {
    event.preventDefault();

    if (!this.newFlashcardSetIsValid()) {
      return;
    }

    this.props.actions.saveFlashcardSet(this.state.newFlashcardSet);
    this.setState({resetNewFlashcardSetKey: this.state.resetNewFlashcardSetKey+1});
    toastr.success("Fishky set saved!");
  }

  deleteFlashcardSet(flashcard) {
    this.props.actions.deleteFlashcard(flashcard);
    toastr.success("Flashcard set has been removed");
  }

  render() {
    const {flashcardSets, loadingFlashcardSets} = this.props;

    return (
      <div>
        {!loadingFlashcardSets && <FlashcardSetsList
          onSave={this.saveFlashcardSet}
          onChange={this.updateFlashcardSetState}
          flashcardSets={flashcardSets}
        />
        }
        {loadingFlashcardSets && <LoadingBar/>}
      </div>
    )
  }
}

FlashcardSetsContainer.propTypes = {
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
    actions: bindActionCreators(flashcardActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashcardSetsContainer)
