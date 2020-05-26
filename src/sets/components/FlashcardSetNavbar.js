import React from 'react'
import PropTypes from 'prop-types'

const FlashcardSetNavbar = ({goBack, flashcardSetName}) => (
  <div>
    <div className="card col-7 mb-5">
      <div className="card-body">
        <h5 className="card-title">Flaschard set</h5>
        <p className="card-text">{flashcardSetName}</p>
        <button className="btn btn-outline-primary" onClick={() => goBack()}>Go back</button>
      </div>
    </div>
  </div>
);

FlashcardSetNavbar.propTypes = {
  goBack: PropTypes.func.isRequired,
  flashcardSetName: PropTypes.string.isRequired
};

export default FlashcardSetNavbar
