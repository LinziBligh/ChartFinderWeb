import Chart from "./Chart";
import Date from "../components/Date";
import { connect } from "react-redux";
import React, { Component } from "react";

class ChartContainer extends Component {
  render() {
    return (
      <div className="ChartContainer">
        <br />
        <Date date={this.props.date} />
        <Chart />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    date: state.charts.date,
  };
};

export default connect(mapStateToProps)(ChartContainer);
