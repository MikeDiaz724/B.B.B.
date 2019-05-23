import React, { Component } from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import NavBar from './components/NavBar.jsx';
import HomePage from './components/HomePage.jsx';
// import Login from './components/Login.jsx';
// import Post from './components/Post.jsx';
// import Register from './components/Register.jsx';



class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/homePage' component={HomePage} />
            <Route path='/login' component={Login} />
          </Switch>
        <HomePage/>
      </div>
    );
  }
}
export default hot(module)(App);

