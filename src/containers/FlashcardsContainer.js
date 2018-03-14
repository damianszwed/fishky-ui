import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import FlashcardList from '../components/FlashcardList'
import NewFlashcard from '../components/NewFlashcard'

const FlashcardsContainer = ({flashcards}) => (
  <div>
    <NewFlashcard/>
    <FlashcardList flashcards={flashcards}/>
  </div>
);

FlashcardsContainer.propTypes = {
  flashcards: PropTypes.arrayOf(PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  flashcards: state.flashcards.flashcards
});

export default connect(
  mapStateToProps
)(FlashcardsContainer)
