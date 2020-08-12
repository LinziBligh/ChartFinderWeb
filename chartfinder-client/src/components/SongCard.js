import React from 'react'
import Song from './Song'

const SongCard = ({song}) => (
 
<Song song={song} key={song.id}/>
)

export default SongCard

