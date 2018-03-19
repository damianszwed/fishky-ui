import React from 'react'
import PropTypes from 'prop-types'

const LearningQuestion = ({actualQuestion, onSubmit, onChange}) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="answer">{actualQuestion}</label>
        <input className="form-control" id="answer" name="answer" aria-describedby="answer"
               placeholder="Enter answer" type="text" onChange={onChange}/>
        <small id="emailHelp" className="form-text text-muted">Answer to question</small>
      </div>
      <button className="btn btn-outline-primary" onClick={onSubmit}>Submit</button>
    </div>
  )
};

LearningQuestion.propTypes = {
  actualQuestion: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default LearningQuestion;
