import React, { Component } from "react";
import { connect } from "react-redux"
import store from '../store';

class DeleteChart extends Component {
  render() {
    return <button className="text-link" onClick={() => this.handleClick()}>DELETE</button>;
  }

  handleClick = () => {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formData: { userId: this.props.user_id, chartId: this.props.chart_id, birthday: this.props.birthday },
      }),
    };

    fetch(`http://localhost:3001/api/users/${this.props.user_id}`, options)
      .then((response) => response.json())
      .then((user) => {
        this.props.removeChart(user);
       updateLocalStorage();
      });
  }}

  function updateLocalStorage () {
  localStorage.clear();
  localStorage.setItem("state", JSON.stringify(store.getState()))
}



const mapStateToProps = (state) => {
  return {
    user_id: state.charts.user.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeChart: (user) => dispatch({ type: "REMOVE_CHART_FROM_USER", user: user }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteChart);
