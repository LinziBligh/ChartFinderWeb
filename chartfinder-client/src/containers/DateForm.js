import React, { Component } from 'react';

class DateForm extends Component {

  constructor(props){
    super(props)
    this.state={
      date: ""
    }
  }


  render (){
    return(
      
      <div>
        Pick A Date
        <p>(this.state.date)</p>
       </div>)
  }

}

export default DateForm;