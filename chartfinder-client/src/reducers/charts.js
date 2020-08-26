export default (
  state = { chart: {}, requesting: true, date: "", birthday: false, loggedIn: false, user: {} },
  action
) => {
  switch (action.type) {
    case "START_FETCHING_CHART_REQUEST":
      return {
        ...state,
        requesting: true,
      };

    case "ADD_CHART":
      return {
        ...state,
        chart: action.chart,
        requesting: false,
        date: action.chart.date,
      };

    case "START_FETCHING_BIRTHDAY_REQUEST":
      return {
        ...state,
        requesting: true,
      };

    case "ADD_BIRTHDAY":
      return {
        ...state,
        chart: action.chart,
        requesting: false,
        date: action.chart.date,
        birthday: true,
      };

    case "START_POSTING_SIGNUP_REQUEST":
      return {
        ...state,
        requesting: true
      };

      case "ADD_USER":
        console.log(action.user)
      return {
        ...state, user: action.user,
        requesting: false,
        loggedIn: true
      };

      case "START_POSTING_LOGIN_REQUEST":
      return {
        ...state,
        requesting: true
      };

    default:
      return state;
  }
};
