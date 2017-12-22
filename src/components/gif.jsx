import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
  }

  handleSelect = () => {
    this.props.select(this.props.id)
  }

  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/200.webp#0-grid1`
    return (
      <img src={src} className="gif" onClick={this.handleSelect}/>
    );
  }
}

export default Gif;
