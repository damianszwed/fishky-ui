import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';

import LearningQuestion from '../components/LearningQuestion';
import * as learningActions from '../actions/learningActions';

class LearningContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      actualAnswer: Object.assign({}, props.actualAnswer),
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

    toastr.error("Joke, bad answer");
    toastr.success("Correct!");// + (this.state.actualAnswer)
  };

  render() {
    const {learning} = this.props;

    return (
      <div>
        {!learning.learningProcessFinished && <LearningQuestion
          actualQuestion={learning.actualQuestion}
          onSubmit={this.handleSubmit}
          onChange={this.updateAnswerState}
        />}
        {/*TODO summary when learningProcessFinished is true*/}
      </div>
    )
  }
}

LearningContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  loadingFlashcards: PropTypes.bool.isRequired,
  learning: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  actions: PropTypes.object.isRequired,
  loadingFlashcards: state.loadingFlashcards,
  learning: state.learning
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(learningActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LearningContainer)
