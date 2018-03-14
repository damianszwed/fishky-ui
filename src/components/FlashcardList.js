import React from 'react'
import PropTypes from 'prop-types'
import Flashcard from '../components/Flashcard'

const FlashcardList = ({flashcards}) => {
  return (
    <div>
      {flashcards.map(flashcard => (
        <div key={flashcard.question}>
          <Flashcard question={flashcard.question} answer={flashcard.answer}/>
        </div>
      ))}
    </div>
  )
};

FlashcardList.propTypes = {
  flashcards: PropTypes.array,
};


export default FlashcardList;
