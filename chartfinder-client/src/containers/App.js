import React, { Component } from "react";
import "./Chart.css";
import ChartContainer from "./ChartContainer";
import DateForm from "./DateForm";
import Playlist from "../components/Playlist";
import LoginSignup from "./LoginSignup";
import { connect } from "react-redux";
import { fetchChart } from "../actions/fetchChart";

class App extends Component {
  componentDidMount() {
    this.props.submitDate("1984-01-08");
  }

  render() {
    return (
      <div className="App">
        <h1>ChartFinder</h1>
        {this.props.loggedIn && 
        <h2>Welcome back {this.props.user.username}!</h2>}
        <LoginSignup />
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
