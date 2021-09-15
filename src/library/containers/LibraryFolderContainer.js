import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import LoadingBar from "../../app/components/LoadingBar";
import * as libraryFlashcardFoldersActions from '../actions/libraryFlashcardFoldersActions';
import findFlashcardFolderById from "../proxy/findFlashcardFolderById";
import FlashcardFolderNavbar from "../../folders/components/FlashcardFolderNavbar";
import LibraryFlashcard from "../components/LibraryFlashcard";

export class LibraryContainer extends React.Component {
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
    const {libraryFlashcardFolders, loadingLibraryFlashcardFolders} = this.props;
    const flashcardFolder = findFlashcardFolderById(libraryFlashcardFolders,
      this.state.flashcardFolderId);
    return (
      <div>
        <div className="row">
          <div className="col-12 col-lg-6 mb-2">
            {flashcardFolder && <FlashcardFolderNavbar
              flashcardFolderName={flashcardFolder.name}
              goBack={this.goBack}
              flashcardFolderIdToCopy={flashcardFolder.id}
            />
            }
          </div>
        </div>
        <div className="card-deck">
          {flashcardFolder && flashcardFolder.flashcards.map(flashcard => (
            <div key={flashcard.question}>
              <LibraryFlashcard
                question={flashcard.question}
                answers={flashcard.answers}
                flashcard={flashcard}
                modifiedFlashcard={this.state.modifiedFlashcard}
                onDelete={this.deleteFlashcard}
                onModifyChange={this.onQuestionChange}
                onModify={this.saveModifiedFlashcard}
                onModifiedInitialization={this.onModifiedInitialization}
                onFlashcardAnswerFormChange = {this.onFlashcardAnswerFormChange}
                onAddOneMoreAnswer={this.addOneMoreAnswer}
                onRevokeAnswer={this.revokeAnswer}
              />
            </div>
          ))}
        </div>
        {loadingLibraryFlashcardFolders && <LoadingBar/>}
      </div>
    )
  }
}

LibraryContainer.propTypes = {
  libraryFlashcardFolders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  loadingLibraryFlashcardFolders: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  libraryFlashcardFolders: state.libraryFlashcardFolders,
  actions: PropTypes.object.isRequired,
  loadingLibraryFlashcardFolders: state.loadingLibraryFlashcardFolders
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(libraryFlashcardFoldersActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LibraryContainer))
