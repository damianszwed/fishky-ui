import React from 'react'
import PropTypes from 'prop-types'
import FlashcardDeleteModal from "./FlashcardDeleteModal";
import FlashcardModifyModal from "./FlashcardModifyModal";

const Flashcard = ({question, answer, flashcard, onDelete, onModify}) => {
  return (
    <div>
      <div className="card mb-2">
        <div className="card-body">
          <h5 className="card-title">{question}</h5>
          <p className="card-text">{answer}</p>
          <button className="btn btn-outline-warning mr-1" type="button" data-toggle="modal"
                  data-target={"#modifyFlashcardModalDataTarget" + flashcard.id.replace(/=/g, '-')}>Edit
          </button>
          <button className="btn btn-outline-danger" type="button" data-toggle="modal"
                  data-target={"#deleteFlashcardModalDataTarget" + flashcard.id.replace(/=/g, '-')}>Delete
          </button>
        </div>
      </div>
      <FlashcardDeleteModal question={question} flashcard={flashcard} onDelete={onDelete}/>
      <FlashcardModifyModal question={question} flashcard={flashcard} onModify={onModify}/>
    </div>
  );
};

Flashcard.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  flashcard: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onModify: PropTypes.func.isRequired
};

export default Flashcard;
