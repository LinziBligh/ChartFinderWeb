import React, { Component } from "react";
import "./Chart.css";
import { Link } from "react-router-dom";

class LoginSignup extends Component {
  render() {
    return (
      <div>
        <Link className='text-link' to="/signup">Sign Up</Link>
        <Link className='text-link' to="/login">Log In</Link>
      </div>
    );
  }
}

export default LoginSignup;
