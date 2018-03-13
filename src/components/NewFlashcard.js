import React from 'react'
import PropTypes from 'prop-types'

const NewFlashcard = () => (
  <div>
    <div className="d-none d-lg-block">
      <div className="input-group form-row">
        <input type="text" className="form-control col-md-4" placeholder="Question" aria-label="Question"
               aria-describedby="basic-addon2"/>
        <div className="input-group-prepend">
          <span className="input-group-text">=</span>
        </div>
        <input type="text" className="form-control col-md-4" placeholder="Answer" aria-label="Answer"
               aria-describedby="basic-addon2"/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Add flashcard</button>
        </div>
      </div>
    </div>
    <div className="form-row d-lg-none">
      <input type="text" className="form-control col-md-4" placeholder="Question" aria-label="Question"
             aria-describedby="basic-addon2"/>
      <div className="input-group-prepend">
        <span className="input-group-text">=</span>
      </div>
      <input type="text" className="form-control col-md-4" placeholder="Answer" aria-label="Answer"
             aria-describedby="basic-addon2"/>
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">Add flashcard</button>
      </div>
    </div>
  </div>
);

export default NewFlashcard
