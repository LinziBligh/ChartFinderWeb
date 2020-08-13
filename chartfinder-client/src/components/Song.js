import React from 'react'


const Song = (props) =>
(
<div className="SongCard" key={props.song.id}>

<h1>{props.song.position}</h1>
<p>{props.song.name} - 
{props.song.artist}</p> 

<img className="SongImage" src={props.song.img_url} alt={props.song.name}></img>

{<iframe className="player-spotify" title={`${props.song.name}`} src={`https://embed.spotify.com/?uri=spotify:track:${props.song.spotify_id}`} width="300" height="80" frameBorder="0" allowtransparency="true"></iframe>}
</div>)
export default Song