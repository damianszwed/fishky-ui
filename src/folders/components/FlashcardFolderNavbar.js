import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const FlashcardFolderNavbar = ({goBack, flashcardFolderName, flashcardFolderId, copyToMe}) => (
  <div className="card h-100">
    <div className="card-body">
      <h5 className="card-title">Flaschard folder</h5>
      <p className="card-text">{flashcardFolderName}</p>
      <button className="btn btn-outline-primary col-lg-3 col-sm-12 mr-1" onClick={() => goBack()}>Go back</button>
      <Link to={`/learning/${flashcardFolderId}`}
            className="btn btn-outline-success col-lg-3 col-sm-12 mr-1">Learn this</Link>
      {copyToMe && <Link to={`/academy/${flashcardFolderId}/copy`}
            className="btn btn-outline-success col-lg-4 col-sm-12">Copy to me</Link> }
    </div>
  </div>
);

FlashcardFolderNavbar.propTypes = {
  goBack: PropTypes.func.isRequired,
  flashcardFolderName: PropTypes.string.isRequired,
  flashcardFolderId: PropTypes.string.isRequired,
  copyToMe: PropTypes.bool
};

export default FlashcardFolderNavbar;
