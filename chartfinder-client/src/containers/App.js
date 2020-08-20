import React, { Component } from 'react';
import './Chart.css';
import ChartContainer from './ChartContainer'
import DateForm from './DateForm'
import Playlist from '../components/Playlist'
import {connect} from 'react-redux'
import { fetchChart} from "../actions/fetchChart"



class App extends Component {


  componentDidMount(){
    this.props.submitDate("1984-01-08")
  }

  submitBirthdayForm = date =>{
    this.setState({...this.state, requesting: true, date: date, birthday: true});
    fetch(`http://localhost:3001/api/birthdays/${date}`)
    .then(response => response.json())
    .then (chart=> this.setState({chart, requesting: false, date: date})
    )
  }


  render (){
    return(
    <div className="App">
      <h1>ChartFinder</h1>
      <DateForm submitDateForm={this.submitDateForm} submitBirthdayForm={this.submitBirthdayForm}/>
    {this.props.requesting ? <h1>Requesting......</h1>  :
    <div>
    <ChartContainer />
   <Playlist chart={this.props.chart}/>
    </div>}

    </div>)
}
}

const mapStateToProps = state => {
  return{
    requesting: state.charts.requesting,
    chart: state.charts.chart
  }
}

const mapDispatchToProps = dispatch => {
  return{
    submitDate: date => dispatch(fetchChart(date))
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (App);
