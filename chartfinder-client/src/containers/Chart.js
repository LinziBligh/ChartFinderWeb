import React, { Component } from 'react'
import './Chart.css'
import SongCard from '../components/SongCard'
import Date from '../components/Date'
import { connect } from 'react-redux'


class Chart extends Component{
 
  
  render(){
    return(
      <div>
      <Date chart={this.props.chart} />
      <div className="ChartsContainer">
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

