import React from 'react'
import './Chart.css'


const Song = (props) =>
(<div className="SongCard" key={props.song.id}><p>{props.song.name} - 
{props.song.artist}</p> <img className="SongImage" src={props.song.img_url} alt={props.song.name}></img></div>)

export default Song