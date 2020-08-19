export default (state={ chart: {},requesting: true, date: "", birthday: false}, action) => {
  switch (action.type) {

    case 'START_FETCHING_CHART_REQUEST':
      return{
        ...state, requesting: true
      }


    case 'ADD_CHART':
     return {
        ...state, chart: action.chart, requesting: false, date: action.chart.date }
        
      
        default:
        return state;
  }
}
