import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import LoadingBar from '../../app/components/LoadingBar';
import FlashcardFoldersToLearn from "../components/FlashcardFoldersToLearn";

class ChoiceFlashcardFolderLearningContainer extends React.Component {

  render() {
    const {loadingFlashcardFolders, loadingLibraryFlashcardFolders, flashcardFolders, libraryFlashcardFolders} = this.props;

    return (
      <div>
        {(loadingFlashcardFolders || loadingLibraryFlashcardFolders) && <LoadingBar/>}
        {!loadingFlashcardFolders &&
        <FlashcardFoldersToLearn flashcardFolders={flashcardFolders} navbarText="Choose your fishky folder to learn:"/>
        }
        {!loadingLibraryFlashcardFolders &&
        <FlashcardFoldersToLearn flashcardFolders={libraryFlashcardFolders} navbarText="Choose on of the brought in folders to learn:"/>
        }
      </div>
    )
  }
}

ChoiceFlashcardFolderLearningContainer.propTypes = {
  loadingFlashcardFolders: PropTypes.bool.isRequired,
  loadingLibraryFlashcardFolders: PropTypes.bool.isRequired,
  flashcardFolders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  libraryFlashcardFolders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
};

const mapStateToProps = state => ({
  loadingFlashcardFolders: state.loadingFlashcardFolders,
  loadingLibraryFlashcardFolders: state.loadingLibraryFlashcardFolders,
  flashcardFolders: state.flashcardFolders,
  libraryFlashcardFolders: state.libraryFlashcardFolders
});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChoiceFlashcardFolderLearningContainer))
