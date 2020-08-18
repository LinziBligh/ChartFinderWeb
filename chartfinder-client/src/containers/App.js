import React, { Component } from 'react';
import './Chart.css';
import ChartContainer from './ChartContainer'
import DateForm from './DateForm'
import Playlist from '../components/Playlist'



class App extends Component {

  constructor(props){
    super(props)
    this.state={
      chart: {},
      loading: true,
      date: ""
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/charts/1984-08-01') // be good to make this random
    .then(response => response.json())
    .then (chart=> this.setState({chart, loading: false}))
  }

  submitDateForm = date =>{
    this.setState({...this.state, loading: true, date: date, birthday: false});
    fetch(`http://localhost:3001/api/charts/${date}`)
    .then(response => response.json())
    .then (chart=> this.setState({chart, loading: false, date: date })
    )
  }

  submitBirthdayForm = date =>{
    this.setState({...this.state, loading: true, date: date, birthday: true});
    fetch(`http://localhost:3001/api/birthdays/${date}`)
    .then(response => response.json())
    .then (chart=> this.setState({chart, loading: false, date: date})
    )
  }


  render (){
    return(
    <div className="App">
      <h1>ChartFinder</h1>
      <DateForm submitDateForm={this.submitDateForm} submitBirthdayForm={this.submitBirthdayForm}/>
    {this.state.loading ? <h1>Loading......</h1>  :
    <div>
    <ChartContainer chart={this.state.chart} date={this.state.date} birthday={this.state.birthday}/>
    <Playlist chart={this.state.chart}/>
    </div>}

    </div>)
}
}

export default App;
