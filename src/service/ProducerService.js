import { API_BASE_URL } from "../env";

const API_URL_PRODUCER = API_BASE_URL + "producers";


const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem('accessToken')) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('accessToken'))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function getAllProducer(){

    return request({
        url: API_URL_PRODUCER,
        method: 'GET'
    });
}

export function createProducer(producer){

    return request({
        url: API_URL_PRODUCER,
        method: 'POST',
        body: JSON.stringify(producer)
    });
}