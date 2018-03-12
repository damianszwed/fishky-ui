import React from 'react'
import PropTypes from 'prop-types'

const Flashcard = () => (
  <div>
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Question" aria-label="Question"
             aria-describedby="basic-addon2"/>
      <div class="input-group-prepend">
        <span class="input-group-text">=</span>
      </div>
      <input type="text" className="form-control" placeholder="Answer" aria-label="Answer"
             aria-describedby="basic-addon2"/>
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">Edit</button>
        <button className="btn btn-outline-secondary" type="button">Delete</button>
      </div>
    </div>
  </div>
);

export default Flashcard
