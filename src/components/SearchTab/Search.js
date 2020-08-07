import React, { Component } from "react";
import SearchOptions from "./SearchOptions";

class Search extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Search Tab</h3>
        <SearchOptions data={this.props.data} />
      </div>
    );
  }
}

export default Search;
