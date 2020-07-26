import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import LoadingBar from '../../app/components/LoadingBar';
import FlashcardFoldersToLearn from "../components/FlashcardFoldersToLearn";

class ChoiceFlashcardFolderLearningContainer extends React.Component {

  render() {
    const {loadingFlashcardFolders, flashcardFolders} = this.props;

    return (
      <div>
        {loadingFlashcardFolders && <LoadingBar/>}
        {!loadingFlashcardFolders &&
        <FlashcardFoldersToLearn onSubmit={this.handleSubmit} flashcardFolders={flashcardFolders}/>
        }
      </div>
    )
  }
}

ChoiceFlashcardFolderLearningContainer.propTypes = {
  loadingFlashcardFolders: PropTypes.bool.isRequired,
  flashcardFolders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
};

const mapStateToProps = state => ({
  loadingFlashcardFolders: state.loadingFlashcardFolders,
  flashcardFolders: state.flashcardFolders
});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChoiceFlashcardFolderLearningContainer))
