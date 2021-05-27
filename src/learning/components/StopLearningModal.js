import React from 'react'
import PropTypes from 'prop-types'

const StopLearningModal = ({onResignation}) => {
  return (
    <div>
      <div className="modal fade" id={"stopLearningModalDataTarget"} tabIndex="-1" role="dialog"
           aria-labelledby="stopLearningModalLabel"
           aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="stopLearningModalLabel">Acknowledgement</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Are you sure? It will clear the learning process status
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-outline-danger" data-dismiss="modal"
                      onClick={onResignation}>Stop learning
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

StopLearningModal.propTypes = {
  onResignation: PropTypes.func.isRequired
};

export default StopLearningModal;
