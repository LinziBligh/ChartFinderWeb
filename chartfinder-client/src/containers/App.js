import React, { Component } from 'react';
import './App.css';
import Charts from './Charts'



class App extends Component {

  constructor(props){
    super(props)
    this.state={
      charts:[],
      loading: true
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/charts')
    .then(response => response.json())
    .then (charts=> this.setState({charts, loading: false}))
  }


  render (){
    console.log(this.state)
    return(
    <div className="App">
    {this.state.loading ? <h1>Loading......</h1> :
    <Charts charts={this.state.charts} />}
    </div>)
}
}

export default App;
