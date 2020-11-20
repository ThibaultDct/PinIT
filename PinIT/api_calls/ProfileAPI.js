const url = 'http://172.16.18.4:12053/api/profiles/';

export function getProfileFromId(id){
    let urlById = url + id;
    return fetch(urlById)
        .then((reponse) => response.json())
        .catch((error) => console.error(error))
}

const getProfileFromPseudo = async () => {
    let urlByPseudo = url + '?pseudo=' + pseudo;
    try {
        let response = await fetch(urlByPseudo);
        let json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
};

export function getAllProfiles(){
    return fetch(url)
        .then((reponse) => response.json())
        .catch((error) => console.error(error))
}