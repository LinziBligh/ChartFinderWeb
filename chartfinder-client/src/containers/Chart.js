import React from 'react'
import './Chart.css'
import Song from './Song'



const Chart = (props) =>(
<div className="ChartsContainer">
  <h1>Chart</h1>
   <div className="ChartCard" key={props.chart.id}>
    <h3>{props.chart.date}</h3>
    <p>{props.chart.country}</p>
      <div className="SongsContainer">
      {props.chart.songs.map(song=> <Song song={song} /> )}
    </div>
  </div>
</div>)

export default Chart

