import React from 'react'
import PropTypes from 'prop-types'
import Flashcard from '../components/Flashcard'
import {bindActionCreators} from "redux";
import * as flashcardFoldersActions from "../actions/flashcardFoldersActions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import toastr from "toastr";

export class FlashcardListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modifiedFlashcard: {}
    };

    this.deleteFlashcard = this.deleteFlashcard.bind(this);
    this.onModifyChangeFlashcard = this.onModifyChangeFlashcard.bind(this);
    this.modifyFlashcard = this.modifyFlashcard.bind(this);
  }

  deleteFlashcard(flashcard) {
    this.props.actions.deleteFlashcardFromFolder(flashcard, this.props.flashcardFolderId);
    toastr.success("The flashcard has been removed.");
  }

  onModifyChangeFlashcard(event) {
    const field = event.target.name;
    let modifiedFlashcard = Object.assign({}, this.state.modifiedFlashcard);
    modifiedFlashcard[field] = event.target.value;
    return this.setState({modifiedFlashcard: modifiedFlashcard});
  }

  modifyFlashcard(event, flashcard) {
    event.preventDefault();

    let modifiedFlashcard = Object.assign({}, this.state.modifiedFlashcard);
    modifiedFlashcard.id = flashcard.id;
    if (!modifiedFlashcard.question) {
      modifiedFlashcard.question = flashcard.question;
    }
    if (!modifiedFlashcard.answer[0]) {
      modifiedFlashcard.answer[0] = flashcard.answer[0];
    }
    this.props.actions.modifyFlashcardInFolder(modifiedFlashcard, this.props.flashcardFolderId);
    this.setState({
      modifiedFlashcard: {}
    });

    toastr.success("The flashcard has been modified.");
  }

  render() {
    return (
      <div className="card-deck">
        {this.props.flashcards.map(flashcard => (
          <div key={flashcard.question}>
            <Flashcard
              question={flashcard.question}
              answers={flashcard.answers}
              flashcard={flashcard}
              onDelete={this.deleteFlashcard}
              onModifyChange={this.onModifyChangeFlashcard}
              onModify={this.modifyFlashcard}
            />
          </div>
        ))}
      </div>
    )
  }
}

FlashcardListContainer.propTypes = {
  flashcards: PropTypes.array,
  flashcardFolderId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  actions: PropTypes.object.isRequired
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(flashcardFoldersActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FlashcardListContainer))
