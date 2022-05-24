import { API_BASE_URL } from "../env";

const API_URL_ORDERS = API_BASE_URL + "order-items";


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

export function getOrderItem(id){

    return request({
        url: API_URL_ORDERS + '/' + id,
        method: 'GET'
    });
}