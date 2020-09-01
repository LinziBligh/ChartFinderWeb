import { connect } from "react-redux";
import React, { Component } from "react";
import { fetchChart } from "../actions/fetchChart";
import { fetchBirthdayChart } from "../actions/fetchBirthdayChart";
import uuid from "react-uuid"
import DeleteChart from "../components/DeleteChart"


class Dashboard extends Component {

 
  render() {
    return (
      <div>
        <p>Your Saved Playlists</p>
        {this.props.user_charts ? this.props.user_charts.map((chart) => (<div key={uuid()}><button key={uuid()} onClick={()=>this.props.submitDate(chart.date.split("-").reverse().join("-"))}>
            {chart.date} - Daily Chart</button> <DeleteChart chart_id={chart.id} /></div>)) : <p>no charts to show</p>}

            {this.props.user_birthdays ? this.props.user_birthdays.map((chart) => (<div key={uuid()}><button key={uuid()} onClick={()=>this.props.submitBirthday(chart.date.split("-").reverse().join("-"))}>
            {chart.date} - Birthday Chart</button> <DeleteChart chart_id={chart.id}/></div>)) : <p>no birthdays to show</p>}
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    user: state.charts.user,
    user_charts: state.charts.user.charts,
    user_birthdays: state.charts.user.birthdays,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitDate: (date) => dispatch(fetchChart(date)),
    submitBirthday: (date) => dispatch(fetchBirthdayChart(date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
