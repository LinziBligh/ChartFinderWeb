import React from 'react'
import './Charts.css'



const Charts = (props) =>(
<div className="ChartsContainer">
  <h1>Charts</h1>
  {props.charts.map(chart=> 
  <div className="ChartCard">
    <h3>{chart.date}</h3>
    <p>{chart.country}</p>
    <div className="SongsContainer">
    
    </div>
  </div>)}
</div>)

export default Charts

//{chart.songs.map(song=> <div className="SongCard"><p>{song.name} - {song.artist}</p> <img className="SongImage" src={song.img_url} alt={song.name}></img></div>)}