import { store } from "../App";
import {SET_USER} from "../store/actions";

const url = 'http://51.15.230.77:12053/api/projects/';
const token = store.getState().userReducer.token;

async function loadProjects() {
    return fetch(url, {
        method: 'GET',
        headers: {"Authorization": "Token " + token}})
        .then((response) => response.json())
        .catch((error) => {
            console.log(error);
        });
}

export async function createProject(token, image, title, description, profile){
    await fetch("http://51.15.230.77:12053/api/projects/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token
        },
        body: JSON.stringify({
            image: image,
            title: title,
            description: description,
            profile: profile,
            likes: 0
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