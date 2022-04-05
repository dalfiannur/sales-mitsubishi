import axios from 'axios';

export default function (option?: { secure?: boolean }) {
    const baseURL = 'https://api.mitsubishi-jakartapusat.com';

    if (option?.secure) { 
        const token = sessionStorage.getItem('mitsubishi_access_token');
        return axios.create({ 
            baseURL,
            headers: {
                authorization: 'Bearer ' + token
            }
        })
    }

    return axios.create({ baseURL });
}