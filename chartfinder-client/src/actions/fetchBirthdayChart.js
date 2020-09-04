import store from "../store"

export function fetchBirthdayChart(date) {
  return (dispatch) => {
    dispatch({ type: "START_FETCHING_BIRTHDAY_REQUEST" });
    fetch(`http://localhost:3001/api/birthdays/${date}`)
      .then((response) => response.json())
      .then((chart) => {dispatch({ type: "ADD_BIRTHDAY", chart })
      localStorage.setItem("state", JSON.stringify(store.getState()))});

  };
}