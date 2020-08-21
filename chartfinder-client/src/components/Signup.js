import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div>
        <h1>Signup here to save your playlists!</h1>
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

export default Signup;
