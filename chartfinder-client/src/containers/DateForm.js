import React, { Component } from 'react';

class DateForm extends Component {

  constructor(props){
    super(props)
    this.state={
      date: "9/9/99"
    }
  }

  handleOnChange = event => {
    this.setState({
      date: event.target.value
    })
  }

  render (){
    return(
      
      <div>
        Pick A Date
        <p>{this.state.date}</p>
        <form>
          <input type="date" onChange={event=>this.handleOnChange(event)} value={this.state.date}/>
        <input type="submit" />
        </form>
       </div>)
  }

}

export default DateForm;