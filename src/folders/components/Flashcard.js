import React from 'react'
import PropTypes from 'prop-types'

const Flashcard = ({question, answer, flashcard, onDelete}) => {
  return (
    <div>
      <div className="card mb-2">
        <div className="card-body">
          <h5 className="card-title">{question}</h5>
          <p className="card-text">{answer}</p>
          <button className="btn btn-outline-secondary disabled mr-1" type="button">Edit</button>
          <button className="btn btn-outline-danger" type="button" data-toggle="modal"
                  data-target={"#deleteFlashcardModalDataTarget" + flashcard.id.replace(/=/g, '-')}>Delete
          </button>
        </div>
      </div>
      {/*modal for delete */}
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

Flashcard.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Flashcard
