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
    this.resign = this.resign.bind(this);
  }

  updateAnswerState(event) {
    const field = event.target.name;
    if (field === "answer") {
      return this.setState({actualAnswer: event.target.value});
    }
    return this.state;
  };

  isAnswerCorrect(actualAnswer, expectedAnswers) {
    let cleanedActualAnswer = actualAnswer.toLowerCase().trim();
    let cleanedExpectedAnswers = expectedAnswers.map(function (expectedAnswer) {
        return expectedAnswer.toLocaleLowerCase().trim();
      }
    )
    return cleanedExpectedAnswers.includes(cleanedActualAnswer);
  }

  handleSubmit() {
    if (this.isAnswerCorrect(this.state.actualAnswer, this.props.learning.expectedAnswers)) {
      toastr.success("Correct!");
    } else {
      toastr.error("Bad answer, expected answer is one of: " + this.props.learning.expectedAnswers);
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

  resign() {
    this.props.actions.restartLearningState();
    toastr.info("Learning stopped");
  }

  render() {
    const {learning} = this.props;

    return (
      <div>
        <div key={this.state.resetLearningQuestionKey}>
          {!learning.learningProcessFinished && <LearningQuestion
            actualQuestion={learning.actualQuestion}
            onSubmit={this.handleSubmit}
            onChange={this.updateAnswerState}
            onResignation={this.resign}
          />
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
  learning: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  actions: PropTypes.object.isRequired,
  learning: state.learning
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(learningActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LearningContainer))
