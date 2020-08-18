import React from 'react'


const Date = (props) =>(
<div>
 <h3>{props.date.split("-").reverse().join("-")}</h3>
  <p>UK Top 40</p>
  </div>)

        export default Date