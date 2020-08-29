import React, { Component } from "react";
import "./Chart.css";
import ChartContainer from "./ChartContainer";
import DateForm from "./DateForm";
import Playlist from "../components/Playlist";
import LoginSignup from "./LoginSignup";
import { connect } from "react-redux";
import { fetchChart } from "../actions/fetchChart";
import Dashboard from "./Dashboard";



class App extends Component {
 
  handleOnClick = ()=>{
    alert("Logging Out")
    localStorage.clear();
    window.location.reload();
  }  


  render() {
    return (
      <div className="App">
        <h1>ChartFinder</h1>
        {this.props.loggedIn && 
        <div>
        <h2>Welcome back {this.props.user.username}!</h2>
        <button onClick={()=>this.handleOnClick()}>Logout</button>
        </div>}

        {this.props.loggedIn ? <Dashboard />:<LoginSignup />}
        
        <DateForm />
        
        {this.props.requesting ? (
          <h1>Requesting......</h1>
        ) : (
          <div>
            <ChartContainer />
            <Playlist chart={this.props.chart} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    requesting: state.charts.requesting,
    chart: state.charts.chart,
    loggedIn: state.charts.loggedIn,
    user: state.charts.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitDate: (date) => dispatch(fetchChart(date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
