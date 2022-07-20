import React from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as flashcardFoldersActions from '../actions/flashcardFoldersActions';

import FlashcardFolderNavbar from "../components/FlashcardFolderNavbar";
import FlashcardListContainer from './FlashcardListContainer';
import FlashcardNewFormContainer from './FlashcardNewFormContainer';
import LoadingBar from '../../app/components/LoadingBar';
import findFlashcardFolderById from "../proxy/findFlashcardFolderById";
import {withRouter} from 'react-router-dom';

export class FlashcardFolderContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flashcardFolderId: this.props.match.params.flashcardFolderId,
      goBack: this.props.history.goBack
    };

    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.state.goBack();
  }

  render() {
    const {flashcardFolders, loadingFlashcardFolders} = this.props;
    const flashcardFolder = findFlashcardFolderById(flashcardFolders,
      this.state.flashcardFolderId);

    return (
      <div>
        <div className="row">
          <div className="col-12 col-lg-6 mb-2">
            {flashcardFolder && <FlashcardFolderNavbar
              goBack={this.goBack}
              flashcardFolderName={flashcardFolder.name}
              flashcardFolderId={flashcardFolder.id}
            />
            }
          </div>
          <FlashcardNewFormContainer
            flashcardFolderId={this.state.flashcardFolderId}
          />
        </div>
        {flashcardFolder && <FlashcardListContainer
          flashcardFolders={flashcardFolders}
          flashcards={flashcardFolder.flashcards}
          flashcardFolderId={this.state.flashcardFolderId}
        />}
        {loadingFlashcardFolders && <LoadingBar/>}
      </div>
    )
  }
}

FlashcardFolderContainer.propTypes = {
  flashcardFolders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  loadingFlashcardFolders: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  flashcardFolders: state.flashcardFolders,
  actions: PropTypes.object.isRequired,
  loadingFlashcardFolders: state.loadingFlashcardFolders
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(flashcardFoldersActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FlashcardFolderContainer))
