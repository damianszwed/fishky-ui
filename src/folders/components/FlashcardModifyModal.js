import React from 'react'
import PropTypes from 'prop-types'

const FlashcardModifyModal = ({flashcard, modifiedFlashcard, onModifySave, onModifyChange,
                                onFlashcardAnswerFormChange, onAddOneMoreAnswer, onRevokeAnswer}) => {
  return (
    <div>
      <form>
        <div className="modal fade" id={"modifyFlashcardModalDataTarget" + flashcard.id.replace(/=/g, '-')}
             tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modification</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <input type="text" className="form-control mb-1" defaultValue={modifiedFlashcard.question}
                       placeholder="Question" name="question" onChange={onModifyChange}/>
                {
                  modifiedFlashcard.answers && modifiedFlashcard.answers.map((answer, index) => {
                    return (
                      <div key={index} className="input-group">
                        <input type="text"
                               placeholder={"Answer " + (index + 1)}
                               // defaultValue={modifiedFlashcard.answers ? modifiedFlashcard.answers[index + 1] : "" }
                               className="form-control mb-1"
                               onChange={onFlashcardAnswerFormChange.bind(this, index)} value={answer}/>
                      </div>
                    );
                  })
                }
                <div className="btn-group float-right" role="group">
                  <button className="btn btn-outline-secondary btn-sm" onClick={onAddOneMoreAnswer}>Add one more answer</button>
                  <button className="btn btn-outline-secondary btn-sm" onClick={onRevokeAnswer}>Revoke answer</button>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                <button className="btn btn-outline-success" data-dismiss="modal"
                        type="submit" onClick={(event) => onModifySave(event, flashcard)}>Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

FlashcardModifyModal.propTypes = {
  flashcard: PropTypes.object.isRequired,
  modifiedFlashcard: PropTypes.object.isRequired,
  onModifySave: PropTypes.func.isRequired,
  onModifyChange: PropTypes.func.isRequired,
  onFlashcardAnswerFormChange: PropTypes.func.isRequired,
  onAddOneMoreAnswer: PropTypes.func.isRequired,
  onRevokeAnswer: PropTypes.func.isRequired
};

export default FlashcardModifyModal;
