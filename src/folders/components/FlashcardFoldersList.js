import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const FlashcardFoldersList = ({flashcardFolders, onSave, onChange}) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Your fishky folders</span>
      </nav>
      {/*TODO(Damian.Szwed) could be a component FlashcardFoldersListItem*/}
      <ul className="list-group">
        {flashcardFolders.map(flashcardFolder => (
          <li className="list-group-item list-group-item-action" key={flashcardFolder.id}>
            <Link to={`/flashcardFolders/${flashcardFolder.id}`}
                  className=" btn btn-outline-primary col-lg-9 col-sm-12">
              <div className="row">
                <div className="col-11 text-left">
                  {flashcardFolder.name === 'default' ? "Your default fishky folder"
                    : flashcardFolder.name}
                </div>
                <div className="col-1 d-none d-sm-block"><span
                  className="badge badge-primary badge-pill">{flashcardFolder.flashcards.length}</span>
                </div>
              </div>
            </Link>
            <Link to={`/flashcardFolders/${flashcardFolder.id}/delete`}
                  className="btn btn-outline-danger col-lg-3 col-sm-12">Delete</Link>
          </li>
        ))}
        {/*TODO(Damian.Szwed) could be a component FlashcardFoldersListNewItem*/}
        <li className="list-group-item list-group-item-action">
          <form className="form-inline">
            <div className="form-group col-lg-9 col-sm-12">
              <label htmlFor="name"
                     className="sr-only">New flashcard folder</label>
              <input type="text" className="form-control col-12"
                     id="name"
                     name="name"
                     placeholder="Type new folder's name here"
                     onChange={onChange}/>
            </div>
            <button type="submit"
                    className="btn btn-outline-primary col-lg-3 col-sm-12"
                    onClick={onSave}>
              Add new folder
            </button>
          </form>
        </li>
      </ul>
    </div>
  )
};

FlashcardFoldersList.propTypes = {
  flashcardFolders: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FlashcardFoldersList;
