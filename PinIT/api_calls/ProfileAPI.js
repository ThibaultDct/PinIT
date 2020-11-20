

const url = 'http://127.0.0.1:8000/api/profiles/';

export function getProfileFromId(text){
    return fetch(url)
        .then((reponse) => response.json())
        .catch((error) => console.error(error))
}