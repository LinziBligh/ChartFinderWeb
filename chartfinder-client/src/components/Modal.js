import React from 'react'
import Popup from "reactjs-popup"

  const Modal = (props) => (
    <Popup 
      trigger={<button className="button"> Export Playlist To Spotify </button>}
      modal
      closeOnDocumentClick
    >
      <div className="popup-content">
      <h2>Spotify Playlist</h2>
      <h3>Click these links to open up the full tracks in Spotify, and add them to a new playlist!</h3>
      <ul > {props.chart.songs.map((song) => (
        <li key={song.id}>
          {<a href={`spotify:track:${song.spotify_id}`}>{song.name}</a>}
        </li>))}
        </ul>
        </div>
      
    </Popup>
  );
  

  export default Modal
