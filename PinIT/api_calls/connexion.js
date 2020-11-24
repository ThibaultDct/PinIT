import { store } from "../App";
import { userState } from "../store/state";
import { userReducer } from "../store/reducers";
import { SET_USER } from "../store/actions";

export async function login(username, password){
    await fetch("http://172.16.18.4:12053/api/auth/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
        .then((response) => response.json())
        .then((responseData) => {
            console.log(
                "POST Response",
                "Response Body -> " + JSON.stringify(responseData)
            )
            if (responseData.user) {
                store.dispatch({type: SET_USER, payload: {user: responseData.user.username, token: responseData.token, pseudo: responseData.user.username}})
            }
        })
        .catch(err => console.log("Compte inconnu"))
}