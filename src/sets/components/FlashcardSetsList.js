import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const FlashcardSetsList = ({flashcardSets, onSave, onChange}) => {
  return (
    <div>
      <ul className="list-group">
        {flashcardSets.map(flashcardSet => (
          <li className="list-group-item list-group-item-action">
            <Link to={`/flashcardSets/${flashcardSet.id}`}
                  className=" btn btn-outline-primary col-9">
              <div className="row">
                <div className="col-11 text-left">
                  {flashcardSet.name === 'default' ? "Your default fishky set"
                    : flashcardSet.name}
                </div>
                <div className="col-1"><span
                  className="badge badge-primary badge-pill">{flashcardSet.flashcards.length}</span>
                </div>
              </div>
            </Link>
            <Link to={`/flashcardSets/${flashcardSet.id}/delete`}
                  className="btn btn-outline-danger col-3">Delete</Link>
          </li>
        ))}
        <li className="list-group-item list-group-item-action">
          <form className="form-inline">
            <div className="form-group col-9">
              <label htmlFor="name"
                     className="sr-only">New flashcard set</label>
              <input type="text" className="form-control col-12"
                     id="name"
                     name="name"
                     placeholder="Type new set's name here"
                     onChange={onChange}/>
            </div>
            <button type="submit"
                    className="btn btn-outline-primary col-3"
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
