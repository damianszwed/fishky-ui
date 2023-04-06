import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as searchActions from '../actions/searchActions';
import toastr from "toastr";
import LoadingBar from "../../app/components/LoadingBar";
import SearchResults from "../components/SearchResults"

async function doSearch() {
  this.props.actions.doSearch().then(function (message) {
      console.log(message);
    }, function (err) {
      console.log("Cannot invoke search query!")
      console.log(err)
      toastr.error("Critical error. Please contact with the administrator.");
    }
  )
}

export class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.doSearch = doSearch.bind(this)
  }

  async componentDidMount() {
    this.doSearch();
  }

  render() {
    const {searchResults, searchLoading} = this.props;
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-text mb-0 h3">Search results:</span>
        </nav>
        {!searchLoading &&
          <SearchResults searchResults={searchResults}/>
        }
        {searchLoading && <LoadingBar/>}
      </div>
    )
  }
}

SearchContainer.propTypes = {
  searchResults: PropTypes.array.isRequired,
  searchLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  actions: PropTypes.object.isRequired,
  searchResults: state.search.searchResults,
  searchLoading: state.searchLoading
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(searchActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchContainer))
