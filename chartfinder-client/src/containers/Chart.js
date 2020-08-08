import React from 'react'
import './Chart.css'



const Chart = (props) =>(
<div className="ChartsContainer">
  <h1>Chart</h1>
   <div className="ChartCard" key={props.chart.id}>
    <h3>{props.chart.date}</h3>
    <p>{props.chart.country}</p>
      <div className="SongsContainer">
      {props.chart.songs.map(song=> <div className="SongCard" key={song.id}><p>{song.name} 
      - {song.artist}</p> <img className="SongImage" src={song.img_url} alt={song.name}></img></div>)}
    </div>
  </div>
</div>)

export default Chart

