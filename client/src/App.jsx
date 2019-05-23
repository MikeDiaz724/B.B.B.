import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import NavBar from './components/NavBar.jsx';
import HomePage from './components/HomePage.jsx';
import Login from './components/Login.jsx';
import Post from './components/Post.jsx';
import Register from './components/Register.jsx';



class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <HomePage/>
      </div>
    );
  }
}
export default hot(module)(App);
