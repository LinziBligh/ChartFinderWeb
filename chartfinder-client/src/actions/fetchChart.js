export function fetchChart(date){
  return (dispatch) => {
    dispatch({type:'START_FETCHING_CHART_REQUEST'});
    fetch(`http://localhost:3001/api/charts/${date}`)
    .then(response => response.json())
    .then (chart=> dispatch({type: "ADD_CHART", chart})
    )
  }
  }
