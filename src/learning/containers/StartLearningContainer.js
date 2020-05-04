import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';

import LoadingBar from '../../app/components/LoadingBar';
import LearningContainer from './LearningContainer'
import * as learningActions from "../actions/learningActions";
import FlashcardSetsToLearn from "../components/FlashcardSetsToLearn";

class StartLearningContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(flashcardSet) {
    if(flashcardSet.flashcards.length === 0) {
      toastr.warning("Chosen empty fishky set.");
      return;
    }
    this.props.actions.learn(flashcardSet.flashcards);
    toastr.info("Learning process started!");
  };

  render() {
    const {loadingFlashcardSets, flashcardSets, learning} = this.props;

    return (
      <div>
        {loadingFlashcardSets && <LoadingBar/>}
        {!learning.learningProcessEnabled && !loadingFlashcardSets &&
        <FlashcardSetsToLearn onSubmit={this.handleSubmit} flashcardSets={flashcardSets}/>
        }
        {learning.learningProcessEnabled && <LearningContainer/>}
      </div>
    )
  }
}

StartLearningContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  learning: PropTypes.object.isRequired,
  loadingFlashcardSets: PropTypes.bool.isRequired,
  flashcardSets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
};

const mapStateToProps = state => ({
  actions: PropTypes.object.isRequired,
  learning: state.learning,
  loadingFlashcardSets: state.loadingFlashcardSets,
  flashcardSets: state.flashcardSets
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(learningActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StartLearningContainer)
