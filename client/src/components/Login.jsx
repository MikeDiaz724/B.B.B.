import React, { Component } from 'react';
//later might need need css for login
//import './App.css'
import GoogleLogin from 'react-google-login';



class Login extends Component {
  render() {
  
  const responseGoogle = (response) => {
    fetch("/authenticate", {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: response.profileObj.email
      })
    })
    .then(r => r.text().then(function (data) {
      if (data === "") {
        console.log("error");        
      } else {
        console.log(JSON.parse(data));        
      }
    }))
    .catch(err => {
      console.log(err);
      
    })
  };
  return (
		<div>
      <GoogleLogin
        clientId="325715847516-po483aaotpaivdafht54d4ltrv9fd4g3.apps.googleusercontent.com"
        buttonText="Log-in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  )};
};

export default Login;