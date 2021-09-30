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
    };
  }

  render() {
    const {libraryFlashcardFolders, loadingLibraryFlashcardFolders} = this.props;
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Here you can find the brought-in folders that you can use for the learning.</span>
        </nav>
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
