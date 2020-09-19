import React from "react";
import Modal from "./Modal";
import PlaylistTrack from "./PlaylistTrack"

const Playlist = (props) => (
  <div className="Playlist">
    <h1>Share your Playlist</h1>
    <ol>
      {props.chart.songs.map((song) => (
        <PlaylistTrack  song={song}/>
      ))}
    </ol>
    <Modal chart={props.chart} />
  </div>
);

export default Playlist;
