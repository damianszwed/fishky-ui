import React from 'react'
import PropTypes from 'prop-types'
import Flashcard from '../components/Flashcard'
import {bindActionCreators} from "redux";
import * as flashcardFoldersActions from "../actions/flashcardFoldersActions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import toastr from "toastr";

export class FlashcardListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modifiedFlashcard: {},
      markedFolder: null
    };

    this.deleteFlashcard = this.deleteFlashcard.bind(this);
    this.onModifiedInitialization = this.onModifiedInitialization.bind(this);
    this.onQuestionChange = this.onQuestionChange.bind(this);
    this.saveModifiedFlashcard = this.saveModifiedFlashcard.bind(this);

    this.addOneMoreAnswer = this.addOneMoreAnswer.bind(this);
    this.revokeAnswer = this.revokeAnswer.bind(this);
    this.onFlashcardAnswerFormChange = this.onFlashcardAnswerFormChange.bind(this);

    this.moveFlashcard = this.moveFlashcard.bind(this);
    this.moveResetState = this.moveResetState.bind(this);
  }

  deleteFlashcard(flashcard) {
    this.props.actions.deleteFlashcardFromFolder(flashcard, this.props.flashcardFolderId);
    toastr.success("The flashcard has been removed.");
  }

  onModifiedInitialization(flashcard) {
    let newModifiedFlashcard = Object.assign({}, flashcard);
    return this.setState({modifiedFlashcard: newModifiedFlashcard});
  }

  onQuestionChange(event) {
    const field = event.target.name;
    let modifiedFlashcard = Object.assign({}, this.state.modifiedFlashcard);
    modifiedFlashcard[field] = event.target.value;
    return this.setState({modifiedFlashcard: modifiedFlashcard});
  }

  onFlashcardAnswerFormChange(index, event) {
    let answers = this.state.modifiedFlashcard.answers.slice();
    answers[index] = event.target.value;

    let newModifiedFlashcard = Object.assign({}, this.state.modifiedFlashcard);
    newModifiedFlashcard.answers = answers;
    return this.setState({modifiedFlashcard: newModifiedFlashcard});
  }

  addOneMoreAnswer(event) {
    event.preventDefault();
    let answers = this.state.modifiedFlashcard.answers ? this.state.modifiedFlashcard.answers.slice() : [];
    let newModifiedFlashcard = Object.assign({}, this.state.modifiedFlashcard);
    newModifiedFlashcard.answers = [
      ...answers,
      "",
    ];
    return this.setState({modifiedFlashcard: newModifiedFlashcard});
  }

  revokeAnswer(event) {
    event.preventDefault();
    let answers = this.state.modifiedFlashcard.answers.slice();
    if(answers.length === 1) {
      return;
    }
    let newModifiedFlashcard = Object.assign({}, this.state.modifiedFlashcard);
    newModifiedFlashcard.answers = answers.slice(0,-1);
    return this.setState({modifiedFlashcard: newModifiedFlashcard});
  }

  saveModifiedFlashcard(event, flashcard) {
    event.preventDefault();

    let newModifiedFlashcard = Object.assign({}, this.state.modifiedFlashcard);

    if(newModifiedFlashcard.id !== flashcard.id) {
      toastr.error("Something went wrong. Please contact with the administrator.");
      return;
    }

    if (!newModifiedFlashcard.question || !newModifiedFlashcard.answers || !newModifiedFlashcard.answers[0]) {
      toastr.warning("You cannot add empty flashcard");
      return;
    }

    this.props.actions.modifyFlashcardInFolder(newModifiedFlashcard, this.props.flashcardFolderId);
    this.setState({
      modifiedFlashcard: {}
    });

    toastr.success("The flashcard has been modified.");
  }

  moveResetState() {
    this.setState({
      modifiedFlashcard: {},
      markedFolder: null
    });
  }

  moveFlashcard(event, flashcard, flashcardFolder) {
    event.preventDefault();

    if (this.state.markedFolder === flashcardFolder) {
      this.setState({
        modifiedFlashcard: {},
        markedFolder: null
      });
      this.props.actions.deleteFlashcardFromFolder(flashcard, this.props.flashcardFolderId);
      this.props.actions.saveFlashcardInFolder(flashcard, flashcardFolder.id);
      toastr.success("The flashcard will be moved to " + flashcardFolder.name + ".");
    } else {
      this.setState({
        modifiedFlashcard: {},
        markedFolder: flashcardFolder
      });
    }
  }

  render() {
    return (
      <div className="card-deck">
        {this.props.flashcards.map(flashcard => (
          <div key={flashcard.question}>
            <Flashcard
              flashcardFolders={this.props.flashcardFolders}
              currentFolderId={this.props.flashcardFolderId}
              question={flashcard.question}
              answers={flashcard.answers}
              flashcard={flashcard}
              modifiedFlashcard={this.state.modifiedFlashcard}
              markedFolder={this.state.markedFolder}
              onDelete={this.deleteFlashcard}
              onModifyChange={this.onQuestionChange}
              onModify={this.saveModifiedFlashcard}
              onModifiedInitialization={this.onModifiedInitialization}
              onFlashcardAnswerFormChange = {this.onFlashcardAnswerFormChange}
              onAddOneMoreAnswer={this.addOneMoreAnswer}
              onRevokeAnswer={this.revokeAnswer}
              onMove={this.moveFlashcard}
              onMoveResetState={this.moveResetState}
            />
          </div>
        ))}
      </div>
    )
  }
}

FlashcardListContainer.propTypes = {
  flashcardFolders: PropTypes.array,
  flashcards: PropTypes.array,
  flashcardFolderId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  actions: PropTypes.object.isRequired
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(flashcardFoldersActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FlashcardListContainer))
