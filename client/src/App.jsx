import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/post' component={Post} />
          </Switch>
      </div>
    );
  }
}
export default hot(module)(App);

