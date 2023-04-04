import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as searchActions from '../actions/searchActions';
import SearchInput from "../components/SearchInput";

export class SearchInputContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
    this.updateSearchState = this.updateSearchState.bind(this);
  }

  updateSearchState(event) {
    const field = event.target.name;
    if( field === "search") {
      this.props.actions.setSearchQ(event.target.value)
    }
  }

  render() {
    return (
      <div>
        <SearchInput onChange={this.updateSearchState}/>
      </div>
    )
  }
}

SearchInputContainer.propTypes = {
  // searchQ: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  actions: PropTypes.object.isRequired,
  searchQ: state.searchQ
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(searchActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchInputContainer))
