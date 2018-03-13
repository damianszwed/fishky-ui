import React from 'react'
import PropTypes from 'prop-types'

const NewFlashcard = () => (
  <div>
    <div className="d-none d-lg-block">
      <div className="input-group form-row">
        <input type="text" className="form-control col-md-4" placeholder="Question" aria-label="Question"
               aria-describedby="basic-addon2"/>
        <div className="input-group-prepend">
          <span className="input-group-text"><i className="fas fa-arrows-alt-h fa-sm"/></span>
        </div>
        <input type="text" className="form-control col-md-4" placeholder="Answer" aria-label="Answer"
               aria-describedby="basic-addon2"/>
        <div className="input-group-append">
          <button className="btn btn-outline-success" type="button">Add flashcard</button>
        </div>
      </div>
    </div>
    <div className="d-lg-none">
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Question"/>
      <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Answer"/>
      <div className="row">
        <div className="col-md-6 offset-md-6">
          <button className="btn btn-outline-success btn-block" type="button">Add flashcard</button>
        </div>
      </div>
    </div>
  </div>
);

export default NewFlashcard
