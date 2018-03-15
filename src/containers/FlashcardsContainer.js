import React from 'react'
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import * as flashcardActions from '../actions/flashcardActions';
import toastr from 'toastr';

import FlashcardList from '../components/FlashcardList'
import NewFlashcard from '../components/NewFlashcard'

class FlashcardsContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      newFlashcard: Object.assign({}, props.newFlashcard),
      saving: false
    };

    this.updateFlashcardState = this.updateFlashcardState.bind(this);
    this.saveFlashcard = this.saveFlashcard.bind(this);
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

    this.props.actions.saveFlashcard(this.state.newFlashcard);
    toastr.success("Fishky saved!");
  }

  render() {
    const {flashcards} = this.props;

    return (
      <div>
        <NewFlashcard
          onSave={this.saveFlashcard}
          onChange={this.updateFlashcardState}
        />
        <FlashcardList flashcards={flashcards}/>
      </div>
    )
  }
}

FlashcardsContainer.propTypes = {
  flashcards: PropTypes.arrayOf(PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  flashcards: state.flashcards,
  actions: PropTypes.object.isRequired
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(flashcardActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashcardsContainer)
