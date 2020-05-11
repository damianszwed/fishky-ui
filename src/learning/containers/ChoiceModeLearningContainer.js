import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import findFlashcardSetById from "../../sets/proxy/findFlashcardSetById";
import * as learningActions from "../actions/learningActions";
import LoadingBar from "../../app/components/LoadingBar";
import MODES from "../reducers/modesArray";
import {Link, withRouter} from "react-router-dom";
import {bindActionCreators} from "redux";

class ChoiceModeLearningContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flashcardSetId: this.props.match.params.flashcardSetId,
      goBack: this.props.history.goBack
    };

    this.goBack = this.goBack.bind(this);
    this.restartLearningState = this.restartLearningState.bind(this);
  }

  goBack() {
    this.state.goBack();
  }

  restartLearningState() {
    this.props.actions.restartLearningState();
  }

  render() {
    const {flashcardSets, loadingFlashcardSets} = this.props;
    const flashcardSet = findFlashcardSetById(flashcardSets,
      this.state.flashcardSetId);

    return (
      <div>
        {loadingFlashcardSets && <LoadingBar/>}
        {!loadingFlashcardSets && flashcardSet && flashcardSet.flashcards.length !== 0 &&
        <div>
          <nav className="navbar navbar-light bg-light mb-3">
            <span className="navbar-brand mb-0 h1">How do you want to learn?</span>
          </nav>
          {MODES.map(mode => (
            <Link to={`/learning/${this.state.flashcardSetId}/mode/${mode.mode}`}
                  className="btn btn-outline-primary btn-block"
                  onClick={() => this.restartLearningState()}
                  key={mode.mode}>
              {mode.value}
            </Link>
          ))}
          <button className="btn btn-outline-danger btn-block" onClick={this.goBack}>Go back</button>
        </div>
        }
        {!loadingFlashcardSets && flashcardSet && flashcardSet.flashcards.length === 0 &&
        <div>
          <nav className="navbar navbar-light bg-light mb-3">
            <span className="navbar-brand mb-0 h1">Chosen empty fishky set.</span>
          </nav>
          <button className="btn btn-outline-danger btn-block" onClick={this.goBack}>Go back</button>
        </div>
        }
      </div>
    )
  }
}

ChoiceModeLearningContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  flashcardSets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  loadingFlashcardSets: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  actions: PropTypes.object.isRequired,
  flashcardSets: state.flashcardSets,
  loadingFlashcardSets: state.loadingFlashcardSets
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(learningActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChoiceModeLearningContainer))
