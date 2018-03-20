import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';

import LoadingBar from '../../app/components/LoadingBar';
import * as learningActions from "../actions/learningActions";

class StartLearningContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);//TODO is this needed???
  }

  handleSubmit() {
    toastr.error("..."+this.props.flashcards.length);
  };

  render() {
    const {loadingFlashcards} = this.props;

    return (
      <div>
        {loadingFlashcards && <LoadingBar/>}
        {!loadingFlashcards && <button className="btn btn-outline-primary" onClick={this.handleSubmit}>Submit</button>}
      </div>
    )
  }
}

StartLearningContainer.propTypes = {
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(learningActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StartLearningContainer)
