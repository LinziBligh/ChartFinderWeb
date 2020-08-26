
import { connect } from "react-redux";
import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <p>Your Saved Playlists</p>
       {console.log(this.props.user.charts)}
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
   user: state.charts.user
  }
}


export default connect(mapStateToProps)(Dashboard)