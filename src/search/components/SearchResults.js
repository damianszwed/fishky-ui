import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const SearchResults = ({searchResults}) => {
  return (
    <div>
      {searchResults.map(searchResult => (
        <div className="card">
          <h5 className="card-header">{searchResult.name}</h5>
          <div className="card-body">
            <h5 className="card-title">{searchResult.flashcards[0] && searchResult.flashcards[0].question}</h5>
            {
              searchResult.flashcards[0] && searchResult.flashcards[0].answers.map(answer => (
                <p className="card-text">{answer}</p>
              ))
            }
            <Link to={`flashcardFolders/${searchResult.id}`} className="btn btn-primary">Go to folder</Link>
          </div>
        </div>
      ))
      }
      {/*{JSON.stringify(searchResults, null, 2)}*/}
    </div>
  )
};

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired
};

export default SearchResults;
