import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import toastr from 'toastr';

import LearningQuestion from '../components/LearningQuestion';
import LoadingBar from '../../app/components/LoadingBar';

class LearningContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      actualAnswer: Object.assign({}, props.actualAnswer),
      actualQuestion: Object.assign({}, props.actualQuestion),
      expectedAnswer: Object.assign({}, props.expectedAnswer)
    };
    this.handleSubmit = this.handleSubmit.bind(this);//TODO is this needed???
    this.updateAnswerState = this.updateAnswerState.bind(this);//TODO is this needed???
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
    const {flashcards, loadingFlashcards} = this.props;

    return (
      <div>
        {loadingFlashcards && <LoadingBar/>}
        {!loadingFlashcards && <LearningQuestion
          actualQuestion={"here will be a question"}
          onSubmit={this.handleSubmit}
          onChange={this.updateAnswerState}
        />}
      </div>
    )
  }
}

LearningContainer.propTypes = {
  flashcards: PropTypes.arrayOf(PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  })).isRequired,
  loadingFlashcards: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  flashcards: state.flashcards,
  actions: PropTypes.object.isRequired,
  loadingFlashcards: state.loadingFlashcards
});

export default connect(mapStateToProps)(LearningContainer)
