import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import NavBar from './components/NavBar.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>  
      </div>
    );
  }
}
export default hot(module)(App);
