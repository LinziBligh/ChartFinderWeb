import React, { Component } from 'react';

class DateForm extends Component {

  constructor(props){
    super(props)
    this.state={
      date: ""
    }
  }

  handleOnChange = event => {
    this.setState({
      date: event.target.value
    })
  }

  handleChartSubmit = event => {
    event.preventDefault();
    this.props.submitDateForm(this.state.date)
  }

  handleBirthdaySubmit = event => {
    event.preventDefault();
    this.props.submitBirthdayForm(this.state.date)
  } //need to do something different with this to get Birthday playlist

  render (){
    return(
      
      <div>
        Pick A Date
        <br />
        <br />
        <form >
          <input type="date" onChange={event=>this.handleOnChange(event)} value={this.state.date}/>
        <button type="submit" onClick={this.handleChartSubmit}>Find Chart</button>
        <button type="submit" onClick={this.handleBirthdaySubmit}>Generate Birthday Playlist</button>
        </form>
       </div>)
  }

}

export default DateForm;