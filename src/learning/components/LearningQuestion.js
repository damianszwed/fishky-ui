import React from 'react'
import PropTypes from 'prop-types'
import StopLearningModal from "./StopLearningModal";

const LearningQuestion = ({actualQuestion, onSubmit, onChange, onResignation}) => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="answer">{actualQuestion}</label>
          <input className="form-control" id="answer" name="answer" aria-describedby="answer"
                 placeholder="Enter answer" type="text" onChange={onChange}/>
          <small id="answerHelp" className="form-text text-muted">Answer the question</small>
        </div>
        <div className="btn-toolbar justify-content-between">
          <button type="submit" className="btn btn-outline-primary" onClick={onSubmit}>Submit</button>
          <button className="btn btn-outline-danger" type="button" data-toggle="modal"
                  data-target={"#stopLearningModalDataTarget"}>Stop learning</button>
        </div>
      </form>
      <StopLearningModal onResignation={onResignation}/>
    </div>
  )
};

LearningQuestion.propTypes = {
  actualQuestion: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default LearningQuestion;
