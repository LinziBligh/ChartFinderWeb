import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchChart} from "../actions/fetchChart"
import { fetchBirthdayChart} from "../actions/fetchBirthdayChart"

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
    this.props.submitDate(this.state.date)
  }

  handleBirthdaySubmit = event => {
    event.preventDefault();
    this.props.submitBirthday(this.state.date)
  }

  render (){
    return(
      
      <div style={{marginTop: "20px"}}>
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

const mapDispatchToProps = dispatch => {
  return{
    submitDate: date => dispatch(fetchChart(date)),
    submitBirthday: date => dispatch(fetchBirthdayChart(date))
  }
}


export default connect (null,mapDispatchToProps) (DateForm);