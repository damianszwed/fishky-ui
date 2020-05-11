import React from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as flashcardSetsActions from '../actions/flashcardSetsActions';
import findFlashcardSetById from '../proxy/findFlashcardSetById';

import toastr from "toastr";
import LoadingBar from "../../app/components/LoadingBar";
import {withRouter} from 'react-router-dom';

export class FlashcardDeleteSetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flashcardSetId: this.props.match.params.flashcardSetId,
      goBack: this.props.history.goBack
    };

    this.deleteFlashcardSet = this.deleteFlashcardSet.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  deleteFlashcardSet(flashcardSet) {
    this.props.actions.deleteFlashcardSet(flashcardSet);
    toastr.success("Flashcard has been removed");
    this.state.goBack();
  }

  goBack() {
    this.state.goBack();
  }

  render() {
    const {flashcardSets, loadingFlashcardSets} = this.props;
    const flashcardSet = findFlashcardSetById(flashcardSets,
      this.state.flashcardSetId);

    return (
      <div>
        {!loadingFlashcardSets && flashcardSet &&
        <div className="card col-12">
          <div className="card-body">
            <h5 className="card-title">{flashcardSet.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Fishky set removal
              operation</h6>
            <p className="card-text">Are you sure to remove fishky set? This
              operation cannot be undone. All flshkies in this set will be also
              removed.</p>
            <button type="button"
                    className="btn btn-outline-danger col-3 mr-1"
                    onClick={() => this.deleteFlashcardSet(flashcardSet)}>
              Delete this set
            </button>
            <button type="button"
                    className="btn btn-outline-primary col-3"
                    onClick={() => this.goBack()}>
              Go back
            </button>
          </div>
        </div>
        }
        {loadingFlashcardSets && <LoadingBar/>}
      </div>

    )
  }
}

FlashcardDeleteSetContainer.propTypes = {
  flashcardSets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  loadingFlashcardSets: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  flashcardSets: state.flashcardSets,
  actions: PropTypes.object.isRequired,
  loadingFlashcardSets: state.loadingFlashcardSets
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(flashcardSetsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FlashcardDeleteSetContainer))
