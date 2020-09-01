import React, { Component } from "react";
import { connect } from "react-redux";

class SaveChart extends Component {
  render() {
    return <button onClick={() => this.handleClick()}>Save Chart</button>;
  }

  handleClick = () => {
    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formData: { userId: this.props.user_id, chartId: this.props.chart_id, birthday: this.props.birthday },
      }),
    };

    fetch(`http://localhost:3001/api/users/${this.props.user_id}`, options)
      .then((response) => response.json())
      .then((user) => {
        this.props.addChart(user);
        localStorage.clear()
        localStorage.setItem("state", JSON.stringify(this.props.state));
      });
  };
}

const mapStateToProps = (state) => {
  return {
    user_id: state.charts.user.id,
    chart_id: state.charts.chart.id,
    birthday: state.charts.birthday,
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addChart: (user) => dispatch({ type: "SAVE_CHART_TO_USER", user: user }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveChart);
