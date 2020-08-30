import history from "../history";
import store from "../store";

export function login(formData) {
  return (dispatch) => {
    dispatch({ type: "START_POSTING_LOGIN_REQUEST" });

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    };

    fetch(`http://localhost:3001/api/sessions`, options)
      .then((response) => response.json())
      .then((user) => {
        dispatch({ type: "ADD_USER", user });
        localStorage.setItem("state", JSON.stringify(store.getState()));
      })

      .then(history.push("/"))
      .catch (error=> {alert("Sorry, we couldn't log you in, please sign up or try again");
      window.location.reload()
       })
      
  }
}
