import React from 'react'
import PropTypes from 'prop-types'

const FlashcardSetsTolearn = ({flashcardSets, onSubmit}) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light mb-3">
        <span className="navbar-brand mb-0 h1">Choose fishky set to learn:</span>
      </nav>
      {flashcardSets.map(flashcardSet => (
        <button className="btn btn-outline-primary btn-block d-flex justify-content-between"
                onClick={() => onSubmit(flashcardSet)}
                key={flashcardSet.id}>
          {flashcardSet.name}
          <span
            className="badge badge-primary badge-pill">{flashcardSet.flashcards.length}</span>
        </button>
      ))}

    </div>
  )
};

FlashcardSetsTolearn.propTypes = {
  flashcardSets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default FlashcardSetsTolearn;
