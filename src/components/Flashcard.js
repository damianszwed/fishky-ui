import React from 'react'
import PropTypes from 'prop-types'

const Flashcard = () => (
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
          <button className="btn btn-outline-primary" type="button">Edit</button>
          <button className="btn btn-outline-danger" type="button">Delete</button>
        </div>
      </div>
    </div>
    <div className="d-lg-none">
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Question"/>
      <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Answer"/>
      <div className="row">
        <div className="col">
          <button className="btn btn-outline-secondary btn-block" type="button">Edit</button>
        </div>
        <div className="col">
          <button className="btn btn-outline-danger btn-block" type="button">Delete</button>
        </div>
      </div>
    </div>
  </div>
);

export default Flashcard
