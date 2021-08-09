import React from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as flashcardFoldersActions from '../actions/flashcardFoldersActions';
import {withRouter} from 'react-router-dom';

import LoadingBar from '../../app/components/LoadingBar';
import FlashcardFoldersList from "../components/FlashcardFoldersList";
import toastr from "toastr";

export class FlashcardFoldersContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newFlashcardFolder: Object.assign({}, props.newFlashcardFolder)
    };

    this.updateFlashcardFolderState = this.updateFlashcardFolderState.bind(this);
    this.saveFlashcardFolder = this.saveFlashcardFolder.bind(this);
  }

  newFlashcardFolderIsValid() {
    if (!this.state.newFlashcardFolder.name || /^\s*$/.test(this.state.newFlashcardFolder.name)) {
      toastr.warning("Please specify name of the fishky folder");
      return false;
    }
    return true;
  }

  updateFlashcardFolderState(event) {
    const field = event.target.name;
    let newFlashcardFolder = Object.assign({}, this.state.newFlashcard);
    newFlashcardFolder[field] = event.target.value;
    return this.setState({newFlashcardFolder: newFlashcardFolder});
  }

  saveFlashcardFolder(event) {
    event.preventDefault();

    if (!this.newFlashcardFolderIsValid()) {
      return;
    }

    this.props.actions.saveFlashcardFolder(this.state.newFlashcardFolder);
    toastr.success("Fishky folder has been saved!");
  }

  render() {
    const {flashcardFolders, loadingFlashcardFolders} = this.props;

    return (
      <div>
        {!loadingFlashcardFolders && <FlashcardFoldersList
          onSave={this.saveFlashcardFolder}
          onChange={this.updateFlashcardFolderState}
          flashcardFolders={flashcardFolders}
        />
        }
        {loadingFlashcardFolders && <LoadingBar/>}
      </div>
    )
  }
}

FlashcardFoldersContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FlashcardFoldersContainer))
