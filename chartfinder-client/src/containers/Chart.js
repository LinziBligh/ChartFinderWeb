import React, { Component } from "react";
import "./Chart.css";
import SongCard from "../components/SongCard";
import { connect } from "react-redux";

class Chart extends Component {
  render() {
    let year = this.props.year - 1;
    return (
      <div>
        <div className="Chart">
          {this.props.songs.map((song) => (
            <SongCard
              song={song}
              birthday={this.props.birthday}
              year={++year}
              key={song.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.charts.chart.songs,
    year: state.charts.chart.date.split("-")[2],
    birthday: state.charts.birthday,
  };
};

export default connect(mapStateToProps)(Chart);
