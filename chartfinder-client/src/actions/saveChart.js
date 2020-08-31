import history from "../history";
import store from "../store";

export function saveChart(formData) {
  return (dispatch) => {
    

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