export default (state={ chart: {},loading: true, date: ""}, action) => {
  switch (action.type) {
    case 'GET_CHARTS_SUCCESS':
      return action.charts;
      default:
        return state;
  }
}