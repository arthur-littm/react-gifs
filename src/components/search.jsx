import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  updateQuery = (event) => {
    this.props.search(event.target.value);
  }

  render() {
    return (
      <input type="text" className="form-control form-search focused" onChange={this.updateQuery}/>
    );
  }
}

export default Search;
