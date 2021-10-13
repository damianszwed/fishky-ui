import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const LibraryFlashcardsFoldersComponent = ({libraryFlashcardFolders}) => {
  return (
    <div>
      <ul className="list-group">
        {libraryFlashcardFolders.map(flashcardFolder => (
          <li className="list-group-item list-group-item-action" key={flashcardFolder.id}>
            <Link to={`/academy/${flashcardFolder.id}`}
                  className=" btn btn-outline-primary col-lg-9 col-sm-12">
              <div className="row">
                <div className="col-11 text-left">
                  {flashcardFolder.name}
                </div>
                <div className="col-1 d-none d-sm-block"><span
                  className="badge badge-primary badge-pill">{flashcardFolder.flashcards.length}</span>
                </div>
              </div>
            </Link>
            <Link to={`/academy/${flashcardFolder.id}/copy`}
                  className="btn btn-outline-success col-lg-3 col-sm-12">Copy to me</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

LibraryFlashcardsFoldersComponent.propTypes = {
  libraryFlashcardFolders: PropTypes.array.isRequired
};

export default LibraryFlashcardsFoldersComponent;
