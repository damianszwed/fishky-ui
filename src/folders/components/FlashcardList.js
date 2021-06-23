import React from 'react'
import PropTypes from 'prop-types'
import Flashcard from './Flashcard'

const FlashcardList = ({flashcards, onDelete, onModifyChange, onModify}) => {
  return (
    <div className="card-deck">
      {flashcards.map(flashcard => (
        <div key={flashcard.question}>
          <Flashcard
            question={flashcard.question}
            answer={flashcard.answer[0]}
            flashcard={flashcard}
            onDelete={onDelete}
            onModifyChange={onModifyChange}
            onModify={onModify}
          />
        </div>
      ))}
    </div>
  )
};

FlashcardList.propTypes = {
  flashcards: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
  onModify: PropTypes.func.isRequired
};

export default FlashcardList;
