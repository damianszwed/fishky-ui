import React from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as flashcardFoldersActions from '../actions/flashcardFoldersActions';
import toastr from 'toastr';

import FlashcardNewForm from '../components/FlashcardNewForm';
import {withRouter} from 'react-router-dom';

export class FlashcardNewFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newFlashcard: Object.assign({
        question: "",
        answers: [""]
      }, props.newFlashcard),
      resetNewFlashcardKey: 0,
      flashcardFolderId: this.props.flashcardFolderId
    };

    this.onFlashcardQuestionFormChange = this.onFlashcardQuestionFormChange.bind(this);
    this.addOneMoreAnswer = this.addOneMoreAnswer.bind(this);
    this.revokeAnswer = this.revokeAnswer.bind(this);
    this.saveFlashcard = this.saveFlashcard.bind(this);
  }

  newFlashcardIsValid() {
    if (!this.state.newFlashcard.question || !this.state.newFlashcard.answers[0]) {
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
    let answers = this.state.newFlashcard.answers.slice();
    answers[index] = event.target.value;

    let newFlashcard = Object.assign({}, this.state.newFlashcard);
    newFlashcard.answers = answers;
    return this.setState({newFlashcard: newFlashcard});
  }

  addOneMoreAnswer() {
    let answers = this.state.newFlashcard.answers.slice();
    let newFlashcard = Object.assign({}, this.state.newFlashcard);
    newFlashcard.answers = [
      ...answers,
      "",
    ];
    return this.setState({newFlashcard: newFlashcard});
  }

  revokeAnswer() {
    let answers = this.state.newFlashcard.answers.slice();
    if(answers.length === 1) {
      return;
    }
    let newFlashcard = Object.assign({}, this.state.newFlashcard);
    newFlashcard.answers = answers.slice(0,-1);
    return this.setState({newFlashcard: newFlashcard});
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

  render() {
    return (
      <div className="col-12 col-lg-6 mb-2">
        <FlashcardNewForm
          key={this.state.resetNewFlashcardKey}
          answers = {this.state.newFlashcard.answers}
          onSave={this.saveFlashcard}
          onChange={this.onFlashcardQuestionFormChange}
          onFlashcardAnswerFormChange = {this.onFlashcardAnswerFormChange}
          onAddOneMoreAnswer={this.addOneMoreAnswer}
          onRevokeAnswer={this.revokeAnswer}
        />
      </div>
    )
  }
}

FlashcardNewFormContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FlashcardNewFormContainer))
