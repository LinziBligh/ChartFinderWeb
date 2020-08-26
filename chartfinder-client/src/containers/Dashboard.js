
import { connect } from "react-redux";
import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <p>Your Saved Playlists</p>
       {this.props.user_charts.map(chart=><li>{chart.date}</li>)}
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
   user: state.charts.user,
   user_charts: state.charts.user.charts,
   user_birthdays: state.charts.user.charts
  }
}


export default connect(mapStateToProps)(Dashboard)