import React from 'react'
import Chart from './Chart'
import Date from '../components/Date'


const ChartContainer = (props) =>
(<div className="ChartContainer"><Date chart={props.chart} />
<Chart chart={props.chart} key={props.chart.id} birthday={props.birthday}/>
</div>
)
export default ChartContainer