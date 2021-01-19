import { store } from "../App";
import { REMOVE_USER, SET_USER } from "../store/actions";

export async function login(username, password){
    await fetch("http://51.15.230.77:12053/api/auth/login", {
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

export async function logout(){
    await fetch("http://51.15.230.77:12053/api/auth/logout", {
        method: 'POST',
        headers: {
            'Authorization': 'Token ' + store.getState().token
        },
    })
        .then((response) => {
            let statusCode = response.status
            console.log("Status code : " + statusCode)
            if (statusCode === 204){
                store.dispatch({type: REMOVE_USER})
            }
        })
}

export async function register(lastname, firstname, username, email, password){
    await fetch("http://51.15.230.77:12053/api/auth/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password,
            first_name: firstname,
            last_name: lastname,
            email: email
        })
    })
        .then((response) => response.json())
        .then((responseData) => {
            console.log(
                "POST Response",
                "Response Body -> " + JSON.stringify(responseData)
            )
            registerProfile(lastname, firstname, username, email, responseData)
        })
        .catch(err => console.log("Compte inconnu"))
}

export async function registerProfile(lastname, firstname, username, email, data){
    console.log("Id : " + data.user.id)
    console.log("Token : " + data.token)
    await fetch("http://172.16.18.4:12053/api/profiles/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + data.token
        },
        body: JSON.stringify({
            pseudo: username,
            firstname: firstname,
            lastname: lastname,
            email: email,
            profile: data.user.id,
            age: 1
        })
    })
        .then((response) => response.json())
        .then((responseData) => {
            console.log(
                "POST Response",
                "Response Body -> " + JSON.stringify(responseData)
            )
        })
        .catch(err => console.log("Compte inconnu"))
}