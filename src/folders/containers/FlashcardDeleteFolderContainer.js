import React from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as flashcardFoldersActions from '../actions/flashcardFoldersActions';
import findFlashcardFolderById from '../proxy/findFlashcardFolderById';

import toastr from "toastr";
import LoadingBar from "../../app/components/LoadingBar";
import {withRouter} from 'react-router-dom';

export class FlashcardDeleteFolderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flashcardFolderId: this.props.match.params.flashcardFolderId,
      goBack: this.props.history.goBack
    };

    this.deleteFlashcardFolder = this.deleteFlashcardFolder.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  deleteFlashcardFolder(flashcardFolder) {
    this.props.actions.deleteFlashcardFolder(flashcardFolder);
    toastr.success("Flashcard has been removed");
    this.state.goBack();
  }

  goBack() {
    this.state.goBack();
  }

  render() {
    const {flashcardFolders, loadingFlashcardFolders} = this.props;
    const flashcardFolder = findFlashcardFolderById(flashcardFolders,
      this.state.flashcardFolderId);

    return (
      <div>
        {!loadingFlashcardFolders && flashcardFolder &&
        <div className="card col-12">
          <div className="card-body">
            <h5 className="card-title">{flashcardFolder.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Fishky folder removal
              operation</h6>
            <p className="card-text">Are you sure to remove the fishky folder? This
              operation cannot be undone. All flshkies in this folder will be also
              removed.</p>
            <button type="button"
                    className="btn btn-outline-danger col-lg-3 mr-1"
                    onClick={() => this.deleteFlashcardFolder(flashcardFolder)}>
              Delete this folder
            </button>
            <button type="button"
                    className="btn btn-outline-primary col-lg-3"
                    onClick={() => this.goBack()}>
              Go back
            </button>
          </div>
        </div>
        }
        {loadingFlashcardFolders && <LoadingBar/>}
      </div>

    )
  }
}

FlashcardDeleteFolderContainer.propTypes = {
  flashcardFolders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  loadingFlashcardFolders: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  flashcardFolders: state.flashcardFolders,
  actions: PropTypes.object.isRequired,
  loadingFlashcardFolders: state.loadingFlashcardFolders
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(flashcardFoldersActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FlashcardDeleteFolderContainer))
