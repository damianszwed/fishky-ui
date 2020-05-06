import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import * as learningActions from "../actions/learningActions";
import findFlashcardSetById from "../../sets/proxy/findFlashcardSetById";
import LoadingBar from "../../app/components/LoadingBar";
import LearningContainer from "./LearningContainer";

class StartLearningContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flashcardSetId: this.props.match.params.flashcardSetId,
      mode: this.props.match.params.mode,
      goBack: this.props.history.goBack
    };

    this.goBack = this.goBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  goBack() {
    this.state.goBack();
  }

  handleSubmit(flashcardSet) {
    if (flashcardSet.flashcards.length === 0) {
      toastr.warning("Chosen empty fishky set.");
      return;
    }
    this.props.actions.learn(flashcardSet.flashcards, this.state.mode);
    toastr.info("Learning process started!");
  };

  render() {
    const {loadingFlashcardSets, flashcardSets, learning} = this.props;
    const flashcardSet = findFlashcardSetById(flashcardSets, this.state.flashcardSetId);

    return (
      <div>
        {loadingFlashcardSets && <LoadingBar/>}
        {!learning.learningProcessEnabled && !loadingFlashcardSets && flashcardSet &&
        <div>
          <nav className="navbar navbar-light bg-light mb-3">
            <span className="navbar-brand mb-0 h1">{flashcardSet.name}</span>
          </nav>
          <button className="btn btn-outline-primary btn-block" onClick={() => this.handleSubmit(flashcardSet)}>Start
            learning
          </button>
          <button className="btn btn-outline-danger btn-block" onClick={() => this.goBack()}>Go back</button>
        </div>
        }
        {learning.learningProcessEnabled && <LearningContainer
          flashcardSet={flashcardSet}
          mode={this.state.mode}
        />}
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
  })).isRequired
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
