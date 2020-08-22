import React, { Component } from "react";

class Login extends Component {
  handleSubmit = (event) => {
    alert("ive been clicked");
  };

  render() {
    return (
      <div>
        <h1>Login here to view your saved playlists!</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Username</label>
          <input type="text" />
          <br />
          <label>Password</label>
          <input type="password" />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Login;