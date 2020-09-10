import React from "react";

const Song = (props) => (
  <div className="Song-h2" key={props.song.id}>
    {props.birthday === true ? (
      <h2>{props.year}</h2>
    ) : (
      <h2>{props.song.position}</h2>
    )}

    <p>
      {props.song.name} -{props.song.artist}
    </p>

    <img
      className="SongImage"
      src={props.song.img_url}
      alt={props.song.name}
    ></img>
  </div>
);
export default Song;
