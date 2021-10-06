import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import * as learningActions from "../actions/learningActions";
import findFlashcardFolderById from "../../folders/proxy/findFlashcardFolderById";
import LoadingBar from "../../app/components/LoadingBar";
import LearningContainer from "./LearningContainer";
import {withRouter} from 'react-router-dom';

class StartLearningContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flashcardFolderId: this.props.match.params.flashcardFolderId,
      mode: this.props.match.params.mode,
      goBack: this.props.history.goBack
    };

    this.goBack = this.goBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  goBack() {
    this.state.goBack();
  }

  handleSubmit(flashcardFolder) {
    if (flashcardFolder.flashcards.length === 0) {
      toastr.warning("Chosen empty fishky folder.");
      return;
    }
    this.props.actions.learn(flashcardFolder.flashcards, this.state.mode);
    toastr.info("Learning process started!");
  };

  render() {
    const {loadingFlashcardFolders, loadingLibraryFlashcardFolders, flashcardFolders, libraryFlashcardFolders, learning} = this.props;
    const ownedFlashcardFolder = findFlashcardFolderById(flashcardFolders, this.state.flashcardFolderId);
    const broughtInFlashcardFolder = findFlashcardFolderById(libraryFlashcardFolders, this.state.flashcardFolderId);
    const flashcardFolder = ownedFlashcardFolder ? ownedFlashcardFolder : broughtInFlashcardFolder;

    return (
      <div>
        {(loadingFlashcardFolders || loadingLibraryFlashcardFolders) && <LoadingBar/>}
        {!learning.learningProcessEnabled && flashcardFolder &&
        <div>
          <nav className="navbar navbar-light bg-light mb-3">
            <span className="navbar-brand mb-0 h1">{flashcardFolder.name}</span>
          </nav>
          <button className="btn btn-outline-primary btn-block" onClick={() => this.handleSubmit(flashcardFolder)}>Start
            learning
          </button>
          <button className="btn btn-outline-danger btn-block" onClick={() => this.goBack()}>Go back</button>
        </div>
        }
        {learning.learningProcessEnabled && <LearningContainer
          flashcardFolder={flashcardFolder}
          mode={this.state.mode}
        />}
      </div>
    )
  }
}

StartLearningContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  learning: PropTypes.object.isRequired,
  loadingFlashcardFolders: PropTypes.bool.isRequired,
  loadingLibraryFlashcardFolders: PropTypes.bool.isRequired,
  flashcardFolders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  libraryFlashcardFolders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
};

const mapStateToProps = state => ({
  actions: PropTypes.object.isRequired,
  learning: state.learning,
  loadingFlashcardFolders: state.loadingFlashcardFolders,
  loadingLibraryFlashcardFolders: state.loadingLibraryFlashcardFolders,
  flashcardFolders: state.flashcardFolders,
  libraryFlashcardFolders: state.libraryFlashcardFolders
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(learningActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StartLearningContainer))
