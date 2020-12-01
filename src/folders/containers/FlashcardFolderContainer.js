import React from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as flashcardFoldersActions from '../actions/flashcardFoldersActions';
import toastr from 'toastr';

import FlashcardFolderNavbar from "../components/FlashcardFolderNavbar";
import FlashcardList from '../components/FlashcardList';
import FlashcardNewForm from '../components/FlashcardNewForm';
import LoadingBar from '../../app/components/LoadingBar';
import findFlashcardFolderById from "../proxy/findFlashcardFolderById";
import {withRouter} from 'react-router-dom';

export class FlashcardFolderContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newFlashcard: Object.assign({}, props.newFlashcard),
      resetNewFlashcardKey: 0,
      flashcardFolderId: this.props.match.params.flashcardFolderId,
      goBack: this.props.history.goBack
    };

    this.updateFlashcardState = this.updateFlashcardState.bind(this);
    this.saveFlashcard = this.saveFlashcard.bind(this);
    this.deleteFlashcard = this.deleteFlashcard.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  newFlashcardIsValid() {
    if (!this.state.newFlashcard.question || !this.state.newFlashcard.answer) {
      toastr.warning("You cannot add empty flashcard");
      return false;
    }
    return true;
  }

  updateFlashcardState(event) {
    const field = event.target.name;
    let newFlashcard = Object.assign({}, this.state.newFlashcard);
    newFlashcard[field] = event.target.value;
    return this.setState({newFlashcard: newFlashcard});
  }

  saveFlashcard(event) {
    event.preventDefault();

    if (!this.newFlashcardIsValid()) {
      return;
    }

    this.props.actions.saveFlashcardInFolder(this.state.newFlashcard, this.state.flashcardFolderId);
    this.setState({resetNewFlashcardKey: this.state.resetNewFlashcardKey + 1});
    toastr.success("Fishky saved!");
  }

  deleteFlashcard(flashcard) {
    this.props.actions.deleteFlashcardFromFolder(flashcard, this.state.flashcardFolderId);
    toastr.success("Flashcard has been removed");
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
            flashcardFolderName={flashcardFolder.name}
            goBack={this.goBack}
          />
          }
          </div>
          <div className="col-12 col-lg-6 mb-2">
            <FlashcardNewForm
              key={this.state.resetNewFlashcardKey}
              onSave={this.saveFlashcard}
              onChange={this.updateFlashcardState}
            />
          </div>
        </div>
        {flashcardFolder && <FlashcardList
          flashcards={flashcardFolder.flashcards}
          onDelete={this.deleteFlashcard}/>}
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
