import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as searchActions from '../actions/searchActions';

export class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render() {
    const {searchQ} = this.props;
    return (
      <div>
        {searchQ}
      </div>
    )
  }
}

SearchContainer.propTypes = {
  searchQ: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  actions: PropTypes.object.isRequired,
  searchQ: state.search.searchQ
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(searchActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchContainer))
