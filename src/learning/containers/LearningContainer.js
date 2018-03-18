import React from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import * as flashcardActions from '../actions/flashcardActions';
import toastr from 'toastr';

// import FlashcardList from '../components/FlashcardList';
// import NewFlashcard from '../components/NewFlashcard';
import LoadingBar from '../../app/components/LoadingBar';

class LearningContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {

    };

  }

  render() {
    const {flashcards, loadingFlashcards} = this.props;

    return (
      <div>
        {loadingFlashcards && <LoadingBar/>}
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">here-will-be-question</label>
            <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter answer" type="email" />
            <small id="emailHelp" className="form-text text-muted">Answer to question</small>
          </div>
          <button type="submit" className="btn btn-outline-primary">Submit</button>
        </form>
        {/*<FlashcardList*/}
        {/*flashcards={flashcards}*/}
        {/*onDelete={this.deleteFlashcard}/>*/}
      </div>
    )
  }
}

LearningContainer.propTypes = {
  flashcards: PropTypes.arrayOf(PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  })).isRequired,
  loadingFlashcards: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  flashcards: state.flashcards,
  actions: PropTypes.object.isRequired,
  loadingFlashcards: state.loadingFlashcards
});

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(flashcardActions, dispatch)
  };
}

export default connect(mapStateToProps, /*mapDispatchToProps*/)(LearningContainer)
