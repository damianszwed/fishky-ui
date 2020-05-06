import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const FlashcardSetsToLearn = ({flashcardSets}) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light mb-3">
        <span className="navbar-brand mb-0 h1">Choose fishky set to learn:</span>
      </nav>
      {flashcardSets.map(flashcardSet => (
        <Link to={`/learning/${flashcardSet.id}`}
              className="btn btn-outline-primary btn-block d-flex justify-content-between"
              key={flashcardSet.id}>
          <span className="mt-1">{flashcardSet.name}</span>
          <span className="badge badge-primary badge-pill h6 mt-2">{flashcardSet.flashcards.length}</span>
        </Link>
      ))}
    </div>
  )
};

FlashcardSetsToLearn.propTypes = {
  flashcardSets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
};

export default FlashcardSetsToLearn;
