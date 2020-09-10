import history from "../history";
import store from "../store";

export function signup(formData) {
  return (dispatch) => {
    dispatch({ type: "START_POSTING_SIGNUP_REQUEST" });

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    };

    fetch(`http://localhost:3001/api/users`, options)
      .then((response) => response.json())
      .then((user) => {
        dispatch({ type: "ADD_USER", user });
        localStorage.setItem("state", JSON.stringify(store.getState()));
      })

      .then(history.push("/"));
  };
}
