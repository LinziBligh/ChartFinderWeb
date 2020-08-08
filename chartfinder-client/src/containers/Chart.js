import React from 'react'
import './Chart.css'
import Song from './Song'
import DateForm from './DateForm'



const Chart = (props) =>(
<div className="ChartsContainer">
  <h1>Your Birthday Chart</h1>
  <DateForm submitDateForm={props.submitDateForm}/>
   <div className="ChartCard" key={props.chart.id}>
    <h3>{props.chart.date}</h3>
    <p>{props.chart.country}</p>
      <div className="SongsContainer">
      {props.chart.songs.map(song=> <Song song={song} /> )}
    </div>
  </div>
</div>)

export default Chart

