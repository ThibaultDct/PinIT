import { store } from "../App";

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