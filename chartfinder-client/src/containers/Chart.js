import React, { Component } from "react";
import "./Chart.css";
import SongCard from "../components/SongCard";
import { connect } from "react-redux";

class Chart extends Component {
  render() {
    return (
      <div>
        <div className="Chart">
          {this.props.songs.map((song) => (
            <SongCard song={song} birthday={this.props.birthday} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.charts.chart.songs,
  };
};

export default connect(mapStateToProps)(Chart);
