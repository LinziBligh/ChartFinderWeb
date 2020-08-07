import React from 'react'
import './Charts.css'



const Charts = (props) =>(
<div className="ChartsContainer">
  <h1>Charts</h1>
  {props.charts.map(chart=> 
  <div className="ChartCard" key={chart.id}>
    <h3>{chart.date}</h3>
    <p>{chart.country}</p>
    <div className="SongsContainer">
    {chart.songs.map(song=> <div className="SongCard" key={song.id}><p>{song.name} - {song.artist}</p> <img className="SongImage" src={song.img_url} alt={song.name}></img></div>)}
    
    </div>
  </div>)}
</div>)

export default Charts

