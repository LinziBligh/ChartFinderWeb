import React from 'react'

const spotify = (props)=>
(<iframe title={`${props.song.name}`} src={`https://embed.spotify.com/?uri=spotify:track:${props.song.spotify_id}`} width="300" height="80" frameBorder="0" allowtransparency="true"></iframe>)

export default spotify