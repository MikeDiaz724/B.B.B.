import React, { Component } from 'react';
//later might need need css for login
//import './App.css'
import GoogleLogin from 'react-google-login';



class Login extends Component {

  render() {
  
  return (
		<div>
      <GoogleLogin
        clientId="325715847516-po483aaotpaivdafht54d4ltrv9fd4g3.apps.googleusercontent.com"
        buttonText="Log-in with Google"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
      />
    </div>
  )};
};

export default Login;