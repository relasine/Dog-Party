import React, { Component } from 'react';
import './App.css';

import Footer from '../Footer';
import DogsContainer from '../DogsContainer';

class App extends Component {
  constructor() {
    super()

    this.state = {
      category: 'All Dogs'
    }
  }

  render() {
    return (
      <div className="App">
        <DogsContainer category={this.state.category}/>
        <Footer />
      </div>
    );
  }
}

export default App;
