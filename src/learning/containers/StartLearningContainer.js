import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';

import LoadingBar from '../../app/components/LoadingBar';
import LearningContainer from './LearningContainer'
import * as learningActions from "../actions/learningActions";

class StartLearningContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.actions.learn();
    toastr.info("Learning process started!");
  };

  render() {
    const {loadingFlashcards, learning} = this.props;

    return (
      <div>
        {loadingFlashcards && <LoadingBar/>}
        {!learning.learningProcessEnabled && !loadingFlashcards &&
        <button className="btn btn-outline-primary btn-block" onClick={this.handleSubmit}>Time to Learn!</button>}
        {learning.learningProcessEnabled && <LearningContainer/>}
      </div>
    )
  }
}

StartLearningContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(StartLearningContainer)
