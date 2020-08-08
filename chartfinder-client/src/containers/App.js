import React, { Component } from 'react';
import './App.css';
import Chart from './Chart'



class App extends Component {

  constructor(props){
    super(props)
    this.state={
      chart: {},
      loading: true
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/charts/1')
    .then(response => response.json())
    .then (chart=> this.setState({chart, loading: false}))
  }


  render (){
    console.log(this.state)
    return(
    <div className="App">
    {this.state.loading ? <h1>Loading......</h1> :
    <Chart chart={this.state.chart} />}
    </div>)
}
}

export default App;
