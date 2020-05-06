import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import LoadingBar from '../../app/components/LoadingBar';
import FlashcardSetsToLearn from "../components/FlashcardSetsToLearn";

class ChoiceFlashcardSetLearningContainer extends React.Component {

  render() {
    const {loadingFlashcardSets, flashcardSets} = this.props;

    return (
      <div>
        {loadingFlashcardSets && <LoadingBar/>}
        {!loadingFlashcardSets &&
        <FlashcardSetsToLearn onSubmit={this.handleSubmit} flashcardSets={flashcardSets}/>
        }
      </div>
    )
  }
}

ChoiceFlashcardSetLearningContainer.propTypes = {
  loadingFlashcardSets: PropTypes.bool.isRequired,
  flashcardSets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
};

const mapStateToProps = state => ({
  loadingFlashcardSets: state.loadingFlashcardSets,
  flashcardSets: state.flashcardSets
});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceFlashcardSetLearningContainer)
