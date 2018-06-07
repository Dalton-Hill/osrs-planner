import React, { Component } from 'react';
import { Auth } from 'aws-amplify';


class Authentication extends Component {
  state = {
    username: '',
    password: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    Auth.signUp(this.state)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  handleEmailChange = (event) => {
    this.setState({ username: event.target.value })
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value })
  };

  render() {
    return (
      <div className={"card"}>
        <div className={"card-header"}>
          Authentication
        </div>
        <div className={"card-body"}>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                onChange={this.handleEmailChange}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                onChange={this.handlePasswordChange}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"/>
            </div>
            <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}


export default Authentication;