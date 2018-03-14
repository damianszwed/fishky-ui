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
      flashcard: Object.assign({}, props.flashcard),
      errors: {},
      saving: false
    };

    this.updateFlashcardState = this.updateFlashcardState.bind(this);
    this.saveFlashcard = this.saveFlashcard.bind(this);
  }

  updateFlashcardState(event) {
    const field = event.target.name;
    let flashcard = Object.assign({}, this.state.flashcard);
    flashcard[field] = event.target.value;
    return this.setState({flashcard: flashcard});
  }

  saveFlashcard(event) {
    event.preventDefault();

    this.props.actions.saveFlashcard(this.state.flashcard);//TODO rename to newFlashcard
    toastr.info("Fishky saved!");
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
