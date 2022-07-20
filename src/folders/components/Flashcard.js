import React from 'react'
import PropTypes from 'prop-types'
import FlashcardDeleteModal from "./FlashcardDeleteModal";
import FlashcardModifyModal from "./FlashcardModifyModal";
import FlashcardMoveModal from "./FlashcardMoveModal";

const Flashcard = ({
                     flashcardFolders,
                     question,
                     answers,
                     flashcard,
                     onModifiedInitialization,
                     modifiedFlashcard,
                     markedFolder,
                     onDelete,
                     onModifyChange,
                     onModify,
                     onFlashcardAnswerFormChange,
                     onAddOneMoreAnswer,
                     onRevokeAnswer,
                     onMove,
                     onMoveResetState
                   }) => {
  return (
    <div>
      <div className="card mb-2">
        <div className="card-body">
          <h5 className="card-title">{question}</h5>
          {
            answers && answers.map((answer) => {
              return (
                <p key={flashcard.id.replace(/=/g, '-') + answer} className="card-text">{answer}</p>
              );
            })
          }
          <button className="btn btn-outline-success mr-1" type="button" data-toggle="modal"
                  data-target={"#modifyFlashcardModalDataTarget" + flashcard.id.replace(/=/g, '-')}
                  onClick={() => onModifiedInitialization(flashcard)}>Edit
          </button>
          <button className="btn btn-outline-danger mr-1" type="button" data-toggle="modal"
                  data-target={"#deleteFlashcardModalDataTarget" + flashcard.id.replace(/=/g, '-')}>Delete
          </button>
          <button className="btn btn-outline-primary" type="button" data-toggle="modal"
                  data-target={"#moveFlashcardModalDataTarget" + flashcard.id.replace(/=/g, '-')}
                  onClick={() => onMoveResetState()}>Move
          </button>
        </div>
      </div>
      <FlashcardDeleteModal question={question} flashcard={flashcard} onDelete={onDelete}/>
      <FlashcardModifyModal flashcard={flashcard}
                            modifiedFlashcard={modifiedFlashcard}
                            onModifyChange={onModifyChange}
                            onModifySave={onModify}
                            onFlashcardAnswerFormChange={onFlashcardAnswerFormChange}
                            onAddOneMoreAnswer={onAddOneMoreAnswer}
                            onRevokeAnswer={onRevokeAnswer}/>
      <FlashcardMoveModal flashcardFolders={flashcardFolders}
                          flashcard={flashcard}
                          markedFolder={markedFolder}
                          onMove={onMove}/>
    </div>
  );
};

Flashcard.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.array,
  flashcard: PropTypes.object.isRequired,
  modifiedFlashcard: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onModify: PropTypes.func.isRequired,
  onModifyChange: PropTypes.func.isRequired,
  onFlashcardAnswerFormChange: PropTypes.func.isRequired,
  onAddOneMoreAnswer: PropTypes.func.isRequired,
  onRevokeAnswer: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
  onMoveResetState: PropTypes.func.isRequired
};

export default Flashcard;
