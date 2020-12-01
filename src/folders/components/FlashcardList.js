import React from 'react'
import PropTypes from 'prop-types'
import Flashcard from './Flashcard'

const FlashcardList = ({flashcards, onDelete}) => {
  return (
    <div className="card-deck">
      {flashcards.map(flashcard => (
        <div key={flashcard.question}>
          <Flashcard
            question={flashcard.question}
            answer={flashcard.answer}
            flashcard={flashcard}
            onDelete={onDelete}
          />
        </div>
      ))}
    </div>
  )
};

FlashcardList.propTypes = {
  flashcards: PropTypes.array,
  onDelete: PropTypes.func.isRequired
};

export default FlashcardList;
