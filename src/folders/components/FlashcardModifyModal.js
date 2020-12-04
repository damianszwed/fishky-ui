import React from 'react'
import PropTypes from 'prop-types'

const FlashcardModifyModal = ({flashcard, onModify, onModifyChange}) => {
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
                <input type="text" className="form-control mb-1" defaultValue={flashcard.question}
                       placeholder="Question" name="question" onChange={onModifyChange}/>
                <input type="text" className="form-control mb-1" defaultValue={flashcard.answer}
                       placeholder="Answer" name="answer" onChange={onModifyChange}/>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                <button className="btn btn-outline-success" data-dismiss="modal"
                        type="submit" onClick={(event) => onModify(event, flashcard)}>Save changes
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
  onModify: PropTypes.func.isRequired,
  onModifyChange: PropTypes.func.isRequired
};

export default FlashcardModifyModal;
