import React from 'react'
import PropTypes from 'prop-types'

const FlashcardDeleteModal = ({question, flashcard, onDelete}) => {
  return (
    <div>
      <div className="modal fade" id={"deleteFlashcardModalDataTarget" + flashcard.id.replace(/=/g, '-')} tabIndex="-1" role="dialog"
           aria-labelledby="exampleModalLabel"
           aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Acknowledgement</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Delete flashcard {question}?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-outline-danger" data-dismiss="modal"
                      onClick={() => onDelete(flashcard)}>Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FlashcardDeleteModal.propTypes = {
  question: PropTypes.string.isRequired,
  flashcard: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default FlashcardDeleteModal
