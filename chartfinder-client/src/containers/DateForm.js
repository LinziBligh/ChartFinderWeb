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

  handleSubmit = event => {
    event.preventDefault();
    this.props.submitDateForm(this.state.date)
  }

  render (){
    return(
      
      <div>
        Pick A Date
        <p>{this.state.date}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="date" onChange={event=>this.handleOnChange(event)} value={this.state.date}/>
        <input type="submit" />
        </form>
       </div>)
  }

}

export default DateForm;