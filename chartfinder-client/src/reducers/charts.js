export default (state={ chart: {},loading: true, date: ""}, action) => {
  switch (action.type) {
    case 'SET_DATE':
      return {...state, date:action.date};
      default:
        return state;
  }
}