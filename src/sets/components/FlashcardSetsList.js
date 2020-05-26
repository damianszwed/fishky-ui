import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const FlashcardSetsList = ({flashcardSets, onSave, onChange}) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Your fishky sets</span>
      </nav>
      {/*TODO(Damian.Szwed) could be a component FlashcardSetsListItem*/}
      <ul className="list-group">
        {flashcardSets.map(flashcardSet => (
          <li className="list-group-item list-group-item-action" key={flashcardSet.id}>
            <Link to={`/flashcardSets/${flashcardSet.id}`}
                  className=" btn btn-outline-primary col-lg-9 col-sm-12">
              <div className="row">
                <div className="col-11 text-left">
                  {flashcardSet.name === 'default' ? "Your default fishky set"
                    : flashcardSet.name}
                </div>
                <div className="col-1 d-none d-sm-block"><span
                  className="badge badge-primary badge-pill">{flashcardSet.flashcards.length}</span>
                </div>
              </div>
            </Link>
            <Link to={`/flashcardSets/${flashcardSet.id}/delete`}
                  className="btn btn-outline-danger col-lg-3 col-sm-12">Delete</Link>
          </li>
        ))}
        {/*TODO(Damian.Szwed) could be a component FlashcardSetsListNewItem*/}
        <li className="list-group-item list-group-item-action">
          <form className="form-inline">
            <div className="form-group col-lg-9 col-sm-12">
              <label htmlFor="name"
                     className="sr-only">New flashcard set</label>
              <input type="text" className="form-control col-12"
                     id="name"
                     name="name"
                     placeholder="Type new set's name here"
                     onChange={onChange}/>
            </div>
            <button type="submit"
                    className="btn btn-outline-primary col-lg-3 col-sm-12"
                    onClick={onSave}>
              Add new set
            </button>
          </form>
        </li>
      </ul>
    </div>
  )
};

FlashcardSetsList.propTypes = {
  flashcardSets: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FlashcardSetsList;
