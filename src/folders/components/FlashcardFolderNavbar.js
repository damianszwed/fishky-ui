import React from 'react'
import PropTypes from 'prop-types'

const FlashcardFolderNavbar = ({goBack, flashcardFolderName}) => (
  <div>
    <div className="card col-7 mb-5">
      <div className="card-body">
        <h5 className="card-title">Flaschard folder</h5>
        <p className="card-text">{flashcardFolderName}</p>
        <button className="btn btn-outline-primary" onClick={() => goBack()}>Go back</button>
      </div>
    </div>
  </div>
);

FlashcardFolderNavbar.propTypes = {
  goBack: PropTypes.func.isRequired,
  flashcardFolderName: PropTypes.string.isRequired
};

export default FlashcardFolderNavbar
