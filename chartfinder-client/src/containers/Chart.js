import React, {Component} from 'react'
import './Chart.css'
import SongCard from '../components/SongCard'
import DateForm from './DateForm'


class Chart extends Component{
  
  render(){
    return(
      <div className="ChartsContainer">
        <h1>ChartFinder</h1>
        <DateForm submitDateForm={this.props.submitDateForm}/>
        <h3>{this.props.chart.date}</h3>
        <p>{this.props.chart.country}</p>
      
        <div>
          {this.props.chart.songs.map(song=> <SongCard song={song} /> )}
        </div>
        </div>
      )

  
  
  }
}

export default Chart

