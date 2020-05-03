import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const FlashcardSetsList = ({flashcardSets}) => {
  return (
    <div>
      <ul className="list-group">
        {flashcardSets.map(flashcardSet => (
          <li className="list-group-item list-group-item-action">
            <Link to={`/flashcardSets/${flashcardSet.id}`}
                  className=" btn btn-outline-primary col-9">
              <div className="row">
                <div className="col-11 text-left">
                  {flashcardSet.name === 'default' ? "Your default fishky set" : flashcardSet.name}
                </div>
                <div className="col-1"><span className="badge badge-primary badge-pill">{flashcardSet.flashcards.length}</span></div>
              </div>
            </Link>
            <Link to={`/flashcardSets/${flashcardSet.id}/delete`}
                  className="btn btn-outline-danger col-3">Delete this
              set</Link>
          </li>
        ))}
      </ul>
    </div>
  )
};

FlashcardSetsList.propTypes = {
  flashcards: PropTypes.array
};

export default FlashcardSetsList;
