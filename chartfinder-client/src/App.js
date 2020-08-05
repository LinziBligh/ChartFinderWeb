import React from 'react';
import './App.css';
import Charts from './containers/Charts'

const charts = [{
date: 1984,
country: "UK",
songs: [{name:"do be do", artist: "kylie", img_url: "https://vignette.wikia.nocookie.net/kylieminogue/images/5/52/2_Hearts.jpg/revision/latest/scale-to-width-down/220?cb=20161113160538" },
{name:"song 2", artist: "danni", img_url: "https://upload.wikimedia.org/wikipedia/en/e/e7/Spice_Girls_-_Spice_Up_Your_Life.png"}, ]
},
{
  date: 1985,
  country: "USA",
  songs: [{name:"i be you", artist: "p diddy", img_url: "https://miro.medium.com/max/1280/0*Fw3EQ2srkGYJga3a."},
  {name:"song 2", artist: "dee piddy", img_url:"https://upload.wikimedia.org/wikipedia/en/9/9d/Ed_Sheeran_Afire_Love.jpg"}, ]
  },
  {
    date: 1986,
    country: "Japan",
    songs: [{name:"i be you", artist: "p diddy", img_url: "https://miro.medium.com/max/1280/0*Fw3EQ2srkGYJga3a."},
    {name:"song 2", artist: "dee piddy", img_url:"https://upload.wikimedia.org/wikipedia/en/9/9d/Ed_Sheeran_Afire_Love.jpg"}, ]
    }


]



function App() {
  return (
    <div className="App">
    App Container
    <Charts charts={charts} />
    </div>
  );
}

export default App;
