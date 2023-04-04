import React from 'react'
import PropTypes from 'prop-types'

const SearchInput = ({onChange}) => {
  return (
    <div>
      <input className="form-control mr-sm-2" placeholder="Search in my flashcards" aria-label="Search" type="text"
             name="search" onChange={onChange}/>
    </div>
  )
}

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default SearchInput;
