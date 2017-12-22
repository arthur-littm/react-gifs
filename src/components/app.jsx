import React, { Component } from 'react';
import giphy from 'giphy-api';
import Gif from './gif.jsx';
import GifList from './giflist.jsx';
import Search from './search.jsx';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: [],
      selectedGif: 'blqEBWV6iFjGM'
    }

    this.search("oh snap");
  }

  search = (query) => {
    giphy('544pOYpcZBPzSH5aghXk4dWOjTAX7CpQ').search(query, (err, res) => {
      if (res) {
        this.setState({
          gifs: res.data
        })
      }
    });
  }

  select = (gifId) => {
    this.setState({
      selectedGif: gifId
    })
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <Search search={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGif}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} select={this.select}/>
        </div>
      </div>
    );
  }
}

export default App;
