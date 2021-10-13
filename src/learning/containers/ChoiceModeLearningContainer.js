import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import findFlashcardFolderById from "../../folders/proxy/findFlashcardFolderById";
import * as learningActions from "../actions/learningActions";
import LoadingBar from "../../app/components/LoadingBar";
import MODES from "../reducers/modesArray";
import {Link, withRouter} from "react-router-dom";
import {bindActionCreators} from "redux";

class ChoiceModeLearningContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flashcardFolderId: this.props.match.params.flashcardFolderId,
      goBack: this.props.history.goBack
    };

    this.goBack = this.goBack.bind(this);
    this.restartLearningState = this.restartLearningState.bind(this);
  }

  goBack() {
    this.state.goBack();
  }

  restartLearningState() {
    this.props.actions.restartLearningState();
  }

  render() {
    const {loadingFlashcardFolders, loadingLibraryFlashcardFolders, flashcardFolders, libraryFlashcardFolders} = this.props;
    const ownedFlashcardFolder = findFlashcardFolderById(flashcardFolders, this.state.flashcardFolderId);
    const broughtInFlashcardFolder = findFlashcardFolderById(libraryFlashcardFolders, this.state.flashcardFolderId);
    const flashcardFolder = ownedFlashcardFolder ? ownedFlashcardFolder : broughtInFlashcardFolder;

    return (
      <div>
        {(loadingFlashcardFolders || loadingLibraryFlashcardFolders) && <LoadingBar/>}
        {flashcardFolder && flashcardFolder.flashcards.length !== 0 &&
        <div>
          <nav className="navbar navbar-light bg-light mb-3">
            <span className="navbar-brand mb-0 h1">{flashcardFolder.name} - How do you want to learn?</span>
          </nav>
          {MODES.map(mode => (
            <Link to={`/learning/${this.state.flashcardFolderId}/mode/${mode.mode}`}
                  className="btn btn-outline-primary btn-block"
                  onClick={() => this.restartLearningState()}
                  key={mode.mode}>
              {mode.value}
            </Link>
          ))}
          <button className="btn btn-outline-danger btn-block" onClick={this.goBack}>Go back</button>
        </div>
        }
        {flashcardFolder && flashcardFolder.flashcards.length === 0 &&
        <div>
          <nav className="navbar navbar-light bg-light mb-3">
            <span className="navbar-brand mb-0 h1">Chosen empty fishky folder.</span>
          </nav>
          <button className="btn btn-outline-danger btn-block" onClick={this.goBack}>Go back</button>
        </div>
        }
      </div>
    )
  }
}

ChoiceModeLearningContainer.propTypes = {
  actions: PropTypes.object.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChoiceModeLearningContainer))
