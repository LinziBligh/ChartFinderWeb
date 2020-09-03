import React, { Component } from "react";
import { login } from "../actions/login";
import { connect } from "react-redux"

class Login extends Component {

  constructor(){
    super();
    this.state={
      username: "",
      password: ""
    }
  }

handleNameChange = (event)=>{
 this.setState({
   username : event.target.value
 })
}

handlePasswordChange = (event)=>{
  this.setState({
    password : event.target.value
  })
 }


 handleSubmit = (event) => {
  event.preventDefault();
  this.props.login(this.state)
};

  render() {
    return (
      <div>
        <h2>Login here to view your saved playlists!</h2>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Username</label>
          <input type="text" onChange={this.handleNameChange} value={this.state.username}/>
          <br />
          <label>Password</label>
          <input type="password"  onChange={this.handlePasswordChange} value={this.state.password} />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default connect(null, {login})(Login)