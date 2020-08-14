import React from 'react'
import Chart from './Chart'
import Date from '../components/Date'


const ChartContainer = (props) =>
(<div class="ChartContainer"><Date chart={props.chart} />
<Chart chart={props.chart} key={props.chart.id}/>
</div>
)
export default ChartContainer