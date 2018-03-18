import React from 'react'
import PropTypes from 'prop-types'

const LearningQuestion = ({actualQuestion, onSubmit}) => {
  return (
    <div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">here-will-be-question</label>
          <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                 placeholder="Enter answer" type="email"/>
          <small id="emailHelp" className="form-text text-muted">Answer to question</small>
        </div>
        <button className="btn btn-outline-primary" onClick={() => onSubmit()}>Submit</button>
    </div>
  )
};

LearningQuestion.propTypes = {
  actualQuestion: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default LearningQuestion;
