import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import LoadingBar from "../../app/components/LoadingBar";
import * as libraryFlashcardFoldersActions from '../actions/libraryFlashcardFoldersActions';
import LibraryFlashcardsFoldersComponent from "../components/LibraryFlashcardsFoldersComponent";

export class LibraryContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flashcardFolderId: this.props.match.params.flashcardFolderId,
      goBack: this.props.history.goBack
    };

    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.state.goBack();
  }

  render() {
    const {libraryFlashcardFolders, loadingLibraryFlashcardFolders} = this.props;
    return (
      <div>
        {!loadingLibraryFlashcardFolders && libraryFlashcardFolders &&
          <LibraryFlashcardsFoldersComponent libraryFlashcardFolders={libraryFlashcardFolders}/>
        }
        {loadingLibraryFlashcardFolders && <LoadingBar/>}
      </div>
    )
  }
}

LibraryContainer.propTypes = {
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
    actions: bindActionCreators(libraryFlashcardFoldersActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LibraryContainer))
