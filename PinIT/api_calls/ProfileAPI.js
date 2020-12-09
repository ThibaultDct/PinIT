import { store } from "../App";
import { SET_PROFILE, REMOVE_PROFILE } from "../store/actions";

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