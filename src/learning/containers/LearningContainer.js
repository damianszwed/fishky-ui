import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import {withRouter} from 'react-router-dom';

import LearningQuestion from '../components/LearningQuestion';
import * as learningActions from '../actions/learningActions';

class LearningContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flashcardFolder: props.flashcardFolder,
      mode: props.mode,
      actualAnswer: "",
      resetLearningQuestionKey: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.tryAgain = this.tryAgain.bind(this);
    this.updateAnswerState = this.updateAnswerState.bind(this);
  }

  updateAnswerState(event) {
    const field = event.target.name;
    if (field === "answer") {
      return this.setState({actualAnswer: event.target.value});
    }
    return this.state;
  };

  handleSubmit() {
    if (this.state.actualAnswer && this.props.learning.expectedAnswer.toLocaleLowerCase() === this.state.actualAnswer.toLowerCase()) {
      toastr.success("Correct!");
    } else {
      toastr.error("Bad answer, expected answer is: " + this.props.learning.expectedAnswer);
    }
    this.setState({
      resetLearningQuestionKey: this.state.resetLearningQuestionKey + 1,
      actualAnswer: ""
    });
    this.props.actions.submitLearningAnswer({});
  };

  tryAgain() {
    this.props.actions.learn(this.state.flashcardFolder.flashcards, this.state.mode);
    toastr.info("Learning process started!");
  };

  render() {
    const {learning} = this.props;

    return (
      <div>
        <div key={this.state.resetLearningQuestionKey}>
          {!learning.learningProcessFinished && <LearningQuestion
            actualQuestion={learning.actualQuestion}
            onSubmit={this.handleSubmit}
            onChange={this.updateAnswerState}/>
          }
        </div>
        {
          //TODO statistic will be nice!
          learning.learningProcessFinished &&
          <button className="btn btn-outline-primary btn-block" onClick={() => this.tryAgain()}>Try
            again!</button>
        }
      </div>
    )
  }
}

LearningContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  loadingFlashcards: PropTypes.bool.isRequired,
  learning: PropTypes.object.isRequired,
  flashcardFolders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
};

const mapStateToProps = state => ({
  actions: PropTypes.object.isRequired,
  loadingFlashcards: state.loadingFlashcards,
  learning: state.learning,
  flashcardFolders: state.flashcardFolders
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(learningActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LearningContainer))
