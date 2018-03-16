import React from 'react'
import PropTypes from 'prop-types'

const Flashcard = ({question, answer, flashcard, onDelete}) => (
  <div>
    <div className="d-none d-lg-block">
      <div className="input-group form-row">
        <input type="text" className="form-control col-md-4" placeholder="Question" aria-label="Question"
               aria-describedby="basic-addon2" value={question} disabled/>
        <div className="input-group-prepend">
          <span className="input-group-text"><i className="fas fa-arrows-alt-h fa-sm"/></span>
        </div>
        <input type="text" className="form-control col-md-4" placeholder="Answer" aria-label="Answer"
               aria-describedby="basic-addon2" value={answer} disabled/>
        <div className="input-group-append">
          <button className="btn btn-outline-primary" type="button">Edit</button>
          <button className="btn btn-outline-danger" type="button"
                  data-toggle="modal"
                  data-target="#deleteFlashcardModalDataTarger">Delete
          </button>
        </div>
      </div>
    </div>
    <div className="d-lg-none">
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Question" value={question}
             disabled/>
      <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Answer" value={answer}
             disabled/>
      <div className="row">
        <div className="col">
          <button className="btn btn-outline-secondary btn-block" type="button">Edit</button>
        </div>
        <div className="col">
          <button className="btn btn-outline-danger btn-block" type="button" data-toggle="modal"
                  data-target="#deleteFlashcardModalDataTarger">Delete</button>
        </div>
      </div>
    </div>
    {/*modal for delete */}
    <div className="modal fade" id="deleteFlashcardModalDataTarger" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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

Flashcard.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Flashcard
