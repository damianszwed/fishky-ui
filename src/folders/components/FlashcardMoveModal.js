import React from 'react'
import PropTypes from 'prop-types'

const FlashcardModifyModal = ({flashcardFolders, flashcard, markedFolder, onMove}) => {
  return (
    <div>
      <form>
        <div className="modal fade" id={"moveFlashcardModalDataTarget" + flashcard.id.replace(/=/g, '-')}
             tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Move to folder</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {
                  flashcardFolders.map(flashcardFolder => {
                    const isMarked = markedFolder !== null && markedFolder.id === flashcardFolder.id;
                    const inputProps = {
                      'type': 'button'
                    };

                    if (isMarked) {
                      inputProps.type = 'submit';
                      inputProps['data-dismiss'] = 'modal';
                    }

                    return (
                      <button className="btn btn-outline-primary btn-block"
                              {...inputProps}
                              onClick={(event) => onMove(event, flashcard, flashcardFolder)}>
                        {
                          isMarked ?
                            <div className="row">
                              <div className="col-10 text-left">
                                {flashcardFolder.name === 'default' ? "Your default fishky folder"
                                  : flashcardFolder.name} => Tap or click again to confirm
                              </div>
                            </div>
                            :
                            <div className="row">
                              <div className="col-10 text-left">
                                {flashcardFolder.name === 'default' ? "Your default fishky folder"
                                  : flashcardFolder.name}
                              </div>
                              <div>
                                  <span
                                    className="badge badge-primary badge-pill">{flashcardFolder.flashcards.length}
                                  </span>
                              </div>
                            </div>
                        }
                      </button>
                    )
                  })
                }
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

FlashcardModifyModal.propTypes = {
  flashcardFolders: PropTypes.array.isRequired,
  flashcard: PropTypes.object.isRequired,
  markedFolder: PropTypes.object.isRequired,
  onMove: PropTypes.func.isRequired
};

export default FlashcardModifyModal;
