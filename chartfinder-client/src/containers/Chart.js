import React, { Component } from 'react'
import './Chart.css'
import SongCard from '../components/SongCard'
import DateForm from './DateForm'
import { connect } from 'react-redux'


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

//constructor(props){
//  super(props)
//  this.state={
 //   chart: {},
 //   loading: true,
 //   date: "",
//  }
//}

const mapStateToProps = (state) => {
  return ({
    charts: state.charts
  })
}

export default connect(mapStateToProps,) (Chart)

