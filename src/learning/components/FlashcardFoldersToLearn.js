import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const FlashcardFoldersToLearn = ({flashcardFolders, navbarText}) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light mb-3 mt-3">
        <span className="navbar-brand mb-0 h1">{navbarText}</span>
      </nav>
      {flashcardFolders.map(flashcardFolder => (
        <Link to={`/learning/${flashcardFolder.id}`}
              className="btn btn-outline-primary btn-block d-flex justify-content-between"
              key={flashcardFolder.id}>
          <span className="mt-1">{flashcardFolder.name}</span>
          <span className="badge badge-primary badge-pill h6 mt-2">{flashcardFolder.flashcards.length}</span>
        </Link>
      ))}
    </div>
  )
};

FlashcardFoldersToLearn.propTypes = {
    flashcardFolders: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired,
    navbarText: PropTypes.string.isRequired
};

export default FlashcardFoldersToLearn;
