import {token} from "./AuthAPI"
const url = 'http://51.15.230.77:12053/api/projects/';

export const loadProjects = async () =>
    await fetch(url, {
        method: 'GET',
        headers: {"Authorization": "Token " + token}})
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())

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
            profile: parseInt(profile),
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