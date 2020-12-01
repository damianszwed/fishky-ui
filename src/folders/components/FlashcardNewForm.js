import React from 'react'
import PropTypes from 'prop-types'

const FlashcardNewForm = ({onSave, onChange}) => (
  <div className="card h-100">
    <div className="card-body">
      <form>
        <h5 className="card-title">New flashcard</h5>
        <input type="text" className="form-control mb-1" placeholder="Question" aria-label="question"
               name="question" onChange={onChange} aria-describedby="basic-addon2"/>
        <input type="text" className="form-control mb-1" placeholder="Answer" aria-label="answer"
               name="answer" onChange={onChange} aria-describedby="basic-addon2"/>
        <button className="btn btn-outline-success" type="submit" onClick={onSave}>Add flashcard</button>
      </form>
    </div>
  </div>
);

FlashcardNewForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FlashcardNewForm;
