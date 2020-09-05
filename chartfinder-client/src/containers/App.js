import React, { Component } from "react";
import "./Chart.css";
import ChartContainer from "./ChartContainer";
import DateForm from "./DateForm";
import Playlist from "../components/Playlist";
import LoginSignup from "./LoginSignup";
import { connect } from "react-redux";
import { fetchChart } from "../actions/fetchChart";
import Dashboard from "./Dashboard";
import SaveChart from "../components/SaveChart"




class App extends Component {
 
  handleOnClick = ()=>{
    alert("Logging Out")
    localStorage.clear();
    window.location.reload();
  }  


  render() {
    return (
      <div className="App">
        <h4>Introducing...</h4>
        <h1>CHARTFINDER</h1>
        <h3>Find the soundtrack to your life</h3>
        
        {this.props.loggedIn && 
        <div>
        <h2>Welcome back {this.props.user.username}!</h2>
        <button className="loginsignup" onClick={()=>this.handleOnClick()}>Logout</button>
        </div>}

        {this.props.loggedIn ? <Dashboard />:<LoginSignup />}
        
        <DateForm />
        
        {this.props.requesting ? (
          <h2>Generating......</h2>
        ) : (
          <div>
            <hr/>
            <ChartContainer />

            {this.props.loggedIn && 
            <SaveChart />}
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
