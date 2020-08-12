import React from 'react'
import './Chart.css'
import SongCard from '../components/SongCard'
import DateForm from './DateForm'



const Chart = (props) =>(
<div className="ChartsContainer">
  <h1>ChartFinder</h1>
  <DateForm submitDateForm={props.submitDateForm}/>
  <h3>{props.chart.date}</h3>
  <p>{props.chart.country}</p>

  <div>
    {props.chart.songs.map(song=> <SongCard song={song} /> )}
  </div>
  </div>
)

export default Chart

