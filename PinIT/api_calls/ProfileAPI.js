import { store } from "../App";
import {SET_PROFILE, REMOVE_PROFILE, SET_USER} from "../store/actions";

const url = 'http://51.15.230.77:12053/api/profiles/';

export function getProfileFromId(id){
    let urlById = url + id;
    return fetch(urlById)
        .then((reponse) => response.json())
        .catch((error) => console.error(error))
}

const getProfileFromPseudo = async () => {
    let urlByPseudo = url + '?pseudo=' + pseudo;
    try {
        let response = await fetch(urlByPseudo)
        let json = await response.json()
        console.log(json)
        store.dispatch({type: REMOVE_PROFILE})
        return json
    } catch (error) {
        console.error(error);
    }
};

export function getAllProfiles(){
    return fetch(url)
        .then((reponse) => response.json())
        .catch((error) => console.error(error))
}

export async function editProfile(id, pseudo, token, image, age, country, bio){
    let profile = store.getState().userProfileReducer;
    console.log(id + ' ' + pseudo + ' ' + image + ' ' + age + ' ' + country + ' ' + bio)
    await fetch(url + id + '/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token
        },
        body: JSON.stringify({
            id: id,
            lastname: profile.lastname,
            firstname: profile.firstname,
            pseudo: profile.pseudo,
            age: age.text,
            img: image.text,
            country: country.text,
            email: profile.email,
            bio: bio.text
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