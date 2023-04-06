import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const SearchResults = ({searchResults}) => {
  return (
    <div>
      {JSON.stringify(searchResults, null, 2) }
    </div>
  )
};

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired
};

export default SearchResults;
