import React from 'react'


const Song = (props) =>
(
<div  key={props.song.id}>

<h1>{props.song.position}</h1>
<p>{props.song.name} - 
{props.song.artist}</p> 

<img className="SongImage" src={props.song.img_url} alt={props.song.name}></img>

</div>)
export default Song