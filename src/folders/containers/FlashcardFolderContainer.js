import React from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as flashcardFoldersActions from '../actions/flashcardFoldersActions';
import toastr from 'toastr';

import FlashcardFolderNavbar from "../components/FlashcardFolderNavbar";
import FlashcardList from '../components/FlashcardList';
import FlashcardNewForm from '../components/FlashcardNewForm';
import LoadingBar from '../../app/components/LoadingBar';
import findFlashcardFolderById from "../proxy/findFlashcardFolderById";
import {withRouter} from 'react-router-dom';

export class FlashcardFolderContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newFlashcard: Object.assign({
        question: "",
        answer: "",
        answers: [""]
      }, props.newFlashcard),
      modifiedFlashcard: {},
      resetNewFlashcardKey: 0,
      flashcardFolderId: this.props.match.params.flashcardFolderId,
      goBack: this.props.history.goBack
    };

    this.onFlashcardQuestionFormChange = this.onFlashcardQuestionFormChange.bind(this);
    this.onFlashcardAnswerFormChange = this.onFlashcardAnswerFormChange.bind(this);
    this.addOneMoreAnswer = this.addOneMoreAnswer.bind(this);
    this.revokeAnswer = this.revokeAnswer.bind(this);
    this.saveFlashcard = this.saveFlashcard.bind(this);
    this.deleteFlashcard = this.deleteFlashcard.bind(this);
    this.onModifyChangeFlashcard = this.onModifyChangeFlashcard.bind(this);
    this.modifyFlashcard = this.modifyFlashcard.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  newFlashcardIsValid() {
    if (!this.state.newFlashcard.question || !this.state.newFlashcard.answer) {
      toastr.warning("You cannot add empty flashcard");
      return false;
    }
    return true;
  }

  onFlashcardQuestionFormChange(event) {
    const field = event.target.name;
    let newFlashcard = Object.assign({}, this.state.newFlashcard);
    newFlashcard[field] = event.target.value;
    return this.setState({newFlashcard: newFlashcard});
  }

  onFlashcardAnswerFormChange(index, event) {
    const field = event.target.name;
    let newFlashcard = Object.assign({}, this.state.newFlashcard);
    newFlashcard[field] = event.target.value;
    return this.setState({newFlashcard: newFlashcard});
  }

  addOneMoreAnswer() {

  }

  revokeAnswer() {

  }

  saveFlashcard(event) {
    event.preventDefault();

    if (!this.newFlashcardIsValid()) {
      return;
    }

    this.props.actions.saveFlashcardInFolder(this.state.newFlashcard, this.state.flashcardFolderId);
    this.setState({
      resetNewFlashcardKey: this.state.resetNewFlashcardKey + 1,
      newFlashcard: {}
    });
    toastr.success("Fishky saved!");
  }

  deleteFlashcard(flashcard) {
    this.props.actions.deleteFlashcardFromFolder(flashcard, this.state.flashcardFolderId);
    toastr.success("The flashcard has been removed.");
  }

  onModifyChangeFlashcard(event) {
    const field = event.target.name;
    let modifiedFlashcard = Object.assign({}, this.state.modifiedFlashcard);
    modifiedFlashcard[field] = event.target.value;
    return this.setState({modifiedFlashcard: modifiedFlashcard});
  }

  modifyFlashcard(event, flashcard) {
    event.preventDefault();

    let modifiedFlashcard = Object.assign({}, this.state.modifiedFlashcard);
    modifiedFlashcard.id = flashcard.id;
    if(!modifiedFlashcard.question) {
      modifiedFlashcard.question = flashcard.question;
    }
    if(!modifiedFlashcard.answer) {
      modifiedFlashcard.answer = flashcard.answer;
    }
    this.props.actions.modifyFlashcardInFolder(modifiedFlashcard, this.state.flashcardFolderId);
    this.setState({
      modifiedFlashcard: {}
    });

    toastr.success("The flashcard has been modified.");
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
        <div className="row">
          <div className="col-12 col-lg-6 mb-2">
            {flashcardFolder && <FlashcardFolderNavbar
              flashcardFolderName={flashcardFolder.name}
              goBack={this.goBack}
            />
            }
          </div>
          <div className="col-12 col-lg-6 mb-2">
            <FlashcardNewForm
              key={this.state.resetNewFlashcardKey}
              onSave={this.saveFlashcard}
              onChange={this.onFlashcardQuestionFormChange}
            />
          </div>
        </div>
        {flashcardFolder && <FlashcardList
          flashcards={flashcardFolder.flashcards}
          onDelete={this.deleteFlashcard}
          onModifyChange={this.onModifyChangeFlashcard}
          onModify={this.modifyFlashcard}
        />}
        {loadingFlashcardFolders && <LoadingBar/>}
      </div>
    )
  }
}

FlashcardFolderContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FlashcardFolderContainer))
