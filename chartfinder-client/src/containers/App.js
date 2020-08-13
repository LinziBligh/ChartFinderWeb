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
    fetch('http://localhost:3001/api/charts/1984-08-01')
    .then(response => response.json())
    .then (chart=> this.setState({chart, loading: false}))
  }

  submitDateForm = date =>{
    this.setState({...this.state, loading: true, date: date});
    fetch(`http://localhost:3001/api/charts/${date}`)
    .then(response => response.json())
    .then (chart=> this.setState({chart, loading: false, date: date})
    )
  }


  render (){
    return(
    <div className="App">
    {this.state.loading ? <h1>Loading......</h1>  :
    <Chart chart={this.state.chart} submitDateForm={this.submitDateForm} key={this.state.chart.id}/>}
    </div>)
}
}

export default App;
