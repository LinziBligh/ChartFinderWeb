import React, { Component } from "react";

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
    event.preventDefault()
    alert("ive been clicked");
  };

  render() {
    return (
      <div>
        <h1>Login here to view your saved playlists!</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Username</label>
          <input type="text" onChange={(event)=>this.handleNameChange(event)} value={this.state.username}/>
          <br />
          <label>Password</label>
          <input type="password"  onChange={(event)=>this.handlePasswordChange(event)} value={this.state.password} />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Login;