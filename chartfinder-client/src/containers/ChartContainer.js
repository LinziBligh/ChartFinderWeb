import React from 'react'
import Chart from './Chart'


const ChartContainer = (props) =>
(<Chart chart={props.chart} key={props.chart.id}/>
)
export default ChartContainer