import React from 'react'

const Charts = (props) =>(
<div>
  <h1>Charts</h1>
  {props.charts.map(chart=> 
  <div>
    <h3>{chart.date}</h3>
    <p>{chart.country}</p>
    <p>{chart.songs.map(song=> <div><p>{song.name} - {song.artist}</p> <img src={song.img_url} alt={song.name}></img></div>)}
    </p>
  </div>)}
</div>)

export default Charts