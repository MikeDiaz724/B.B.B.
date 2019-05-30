import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      email: '',
      password: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postData = this.postData.bind(this);
  }

  postData(url = '', data = {}) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .catch(err => console.error(err));
  }
  handleInput(e) {
    const { target } = e;
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { user, email, password } = this.state;

    this.postData('/register', {
      user: user.toLowerCase(),
      email: email.toLowerCase(),
      password: password.toLowerCase()
    });

    this.setState({
      user: '',
      email: '',
      password: ''
    });
  }

  render() {
    const { user, email, password } = this.state;
    return (
      <div>
        <label>
          User Name:{' '}
          <input
            type="text"
            name="user"
            value={user}
            onChange={this.handleInput}s
          />
        </label>
        <br />
        <label>
          Email:{' '}
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleInput}
          />
        </label>
        <br/>
        <label>
          Password:{' '}
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default Register;
