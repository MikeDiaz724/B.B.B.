import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descript: '',
      email: '',
      password: ''
    };
    this.postData = this.postData.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const { descript, email, password } = this.state;

    this.postData('/register', {
      descript: descript,
      email: email,
      password: password,
    });

    this.setState({
      descript: "",
      email: "",
      password: ""
    });
  }

  render() {
    const { descript, email, password } = this.state;
    return (
      <div>
        <label>
          User Name:{' '}
          <input
            type="text"
            name="descript"
            value={descript}
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
            type="text"
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
