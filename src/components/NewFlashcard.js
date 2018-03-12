import React from 'react'
import PropTypes from 'prop-types'

const NewFlashcard = () => (
  <div className="input-group form-row">
    <input type="text" className="form-control col-md-4" placeholder="Question" aria-label="Question"
           aria-describedby="basic-addon2"/>
    <div className="input-group-prepend">
      <span className="input-group-text">=</span>
    </div>
    <input type="text" className="form-control col-md-4" placeholder="Answer" aria-label="Answer"
           aria-describedby="basic-addon2"/>
    <div className="input-group-append">
      <button className="btn btn-outline-secondary" type="button">Add</button>
    </div>
  </div>
);

export default NewFlashcard
