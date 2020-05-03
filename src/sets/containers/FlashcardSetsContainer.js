import React from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as flashcardActions from '../actions/flashcardSetsActions';

import LoadingBar from '../../app/components/LoadingBar';
import FlashcardSetsList from "../components/FlashcardSetsList";

export class FlashcardSetsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const {flashcardSets, loadingFlashcardSets} = this.props;

    return (
      <div>
        {!loadingFlashcardSets && <FlashcardSetsList
          flashcardSets={flashcardSets}
        />
        }
        {loadingFlashcardSets && <LoadingBar/>}
      </div>
    )
  }
}

FlashcardSetsContainer.propTypes = {
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
    actions: bindActionCreators(flashcardActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashcardSetsContainer)
