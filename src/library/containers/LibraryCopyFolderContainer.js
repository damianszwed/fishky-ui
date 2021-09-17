import React from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as flashcardFoldersActions from '../actions/libraryFlashcardFoldersActions';
import findFlashcardFolderById from '../proxy/findFlashcardFolderById';

import toastr from "toastr";
import LoadingBar from "../../app/components/LoadingBar";
import {withRouter} from 'react-router-dom';

export class LibraryCopyFolderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flashcardFolderId: this.props.match.params.flashcardFolderId,
      goBack: this.props.history.goBack
    };

    this.copyLibraryFolder = this.copyLibraryFolder.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  copyLibraryFolder(flashcardFolder) {
    this.props.actions.copyLibraryFolder(flashcardFolder);
    toastr.success("Flashcard has been removed");//TODO(Damian.Szwed) text
    this.state.goBack();//TODO(Damian.Szwed) maybe it should go to /flashcardFolders ??
    //TODO(Damian.Szwed) ^^^ https://stackoverflow.com/a/43230829
  }

  goBack() {
    this.state.goBack();
  }

  render() {
    const {libraryFlashcardFolders, loadingLibraryFlashcardFolders} = this.props;
    const flashcardFolder = findFlashcardFolderById(libraryFlashcardFolders,
      this.state.flashcardFolderId);

    return (
      <div>
        {!loadingLibraryFlashcardFolders && flashcardFolder &&
        <div className="card col-12">
          <div className="card-body">
            <h5 className="card-title">{flashcardFolder.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Fishky folder copy
              operation</h6>
            <p className="card-text">Make a copy to me.</p>
            <button type="button"
                    className="btn btn-outline-success col-3 mr-1"
                    onClick={() => this.copyLibraryFolder(flashcardFolder)}>
              Copy the entire folder
            </button>
            <button type="button"
                    className="btn btn-outline-primary col-3"
                    onClick={() => this.goBack()}>
              Go back
            </button>
          </div>
        </div>
        }
        {loadingLibraryFlashcardFolders && <LoadingBar/>}
      </div>

    )
  }
}

LibraryCopyFolderContainer.propTypes = {
  libraryFlashcardFolders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  loadingLibraryFlashcardFolders: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  libraryFlashcardFolders: state.libraryFlashcardFolders,
  actions: PropTypes.object.isRequired,
  loadingLibraryFlashcardFolders: state.loadingLibraryFlashcardFolders
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(flashcardFoldersActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LibraryCopyFolderContainer))
