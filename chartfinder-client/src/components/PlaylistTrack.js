import React, { Component } from "react";

class PlaylistTrack extends Component {
  constructor(props) {
    super();
    this.state = {
      liked: false
    };
  }

  handleLike = (event) => {
    this.setState({
      liked: true,
    });
  };

  handleUnlike = (event) => {
    this.setState({
      liked: false,
    });
  };

  render() {
    return (
      <li key={this.props.song.id}>
      {this.props.song.name} by {this.props.song.artist} 
      {this.state.liked===true? <span>   &#10004;<button onClick={event=>this.handleUnlike(event)}>Unlike</button></span>: <button onClick={event=>this.handleLike(event)}>Like</button>}
    </li>
    );
  }
}

export default PlaylistTrack;