import React, { Component } from 'react';
import './App.css';
import Chart from './Chart'



class App extends Component {

  constructor(props){
    super(props)
    this.state={
      chart: {},
      loading: true,
      date: "",
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/charts/1989-08-11')
    .then(response => response.json())
    .then (chart=> this.setState({chart, loading: false}))
  }

  submitDateForm = date =>{
    this.setState({...this.state, loading: true, date: date});
    fetch(`http://localhost:3001/api/charts/${date}`)
    .then(response => response.json())
    .then (chart=> {
      //needs a catch instead maybe?
      if (chart.status === 400){
      this.setState({chart,  loading: false, date: date })
      }
      else {
        this.setState({chart, loading: false, date: date})
      }
    })
  }


  render (){
    return(
    <div className="App">
    {this.state.loading ? <h1>Loading......</h1>  :
    <Chart chart={this.state.chart} submitDateForm={this.submitDateForm} />}
    </div>)
}
}

export default App;
