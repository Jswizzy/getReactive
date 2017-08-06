import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
      return (
        <button>Hello {this.props.name}</button>
      );
  }
}

export default App;
