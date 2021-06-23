import React from 'react'
import PropTypes from 'prop-types'

const FlashcardNewForm = ({answers, onSave, onChange, onFlashcardAnswerFormChange, onAddOneMoreAnswer, onRevokeAnswer}) => (
  <div className="card h-100">
    <div className="card-body">
      <form>
        <h5 className="card-title">New flashcard</h5>
        <input type="text" className="form-control mb-1" placeholder="Question"
               name="question" onChange={onChange}/>
        <input type="text" className="form-control mb-1" placeholder="Answer"
               name="answer" onChange={onChange}/>
        {
          answers.map((answer, index) => {
            return (
              <div key={index} className="input-group">
                <input type="text"
                       placeholder={"Answer " + (index + 1)}
                       className="form-control mb-1"
                       onChange={onFlashcardAnswerFormChange.bind(this, index)} value={answer}/>
              </div>
            );
          })
        }
        <button className="btn btn-outline-success mb-1" type="submit" onClick={onSave}>Add flashcard</button>
      </form>
      <div className="btn-group float-right" role="group">
        <button className="btn btn-outline-secondary btn-sm" onClick={onAddOneMoreAnswer}>Add one more answer</button>
        <button className="btn btn-outline-secondary btn-sm" onClick={onRevokeAnswer}>Revoke answer</button>
      </div>
    </div>
  </div>
);

FlashcardNewForm.propTypes = {
  answers: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onFlashcardAnswerFormChange: PropTypes.func.isRequired,
  onAddOneMoreAnswer: PropTypes.func.isRequired,
  onRevokeAnswer: PropTypes.func.isRequired
};

export default FlashcardNewForm;
