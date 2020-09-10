import React from "react";
import Modal from "./Modal";

const Playlist = (props) => (
  <div className="Playlist">
    <h1>Share your Playlist</h1>
    <ol>
      {props.chart.songs.map((song) => (
        <li key={song.id}>
          {song.name} by {song.artist}
        </li>
      ))}
    </ol>
    <Modal chart={props.chart} />
  </div>
);

export default Playlist;
