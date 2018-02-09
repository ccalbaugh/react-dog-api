export const BASE_URL = 'https://dog.ceo/api/breeds/list/all';

export const fetchDogs = () => {

    return fetch(BASE_URL)
    .then(res => res.json())
    .then(data => data.message)

}
