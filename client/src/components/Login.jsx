import React, { Component } from 'react';
//later might need need css for login
//import './App.css'
import GoogleLogin from 'react-google-login';



class Login extends Component {
  render() {
  
  const responseGoogle = (response) => {
    console.log(response)
  }
  return (
		<div>
      <GoogleLogin
        clientId="325715847516-po483aaotpaivdafht54d4ltrv9fd4g3.apps.googleusercontent.com"
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  )};
};

export default Login;