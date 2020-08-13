import React, { Component } from 'react'
import Song from './Song'
import Spotify from './Spotify'

class SongCard extends Component {
  render(){
    return(
      <div className="SongCard">
    <Song song={this.props.song} key={this.props.song.id} onMouseEnter={console.log('in!!')} onMouseLeave={console.log('out!!')}/>
    <Spotify song={this.props.song}/>
    </div>)
  }

}
export default SongCard


