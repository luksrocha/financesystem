import axios from 'axios';

export const axiosInstance = (
    url: string,
    params?: { [key: string]: unknown }
) =>
    axios.create({
        baseURL: url,
        params: {
            ...params,
        },
    });

console.log('process.env >>> ', import.meta.env.VITE_COIN_API_KEY);

export const coinsApiInstance = axiosInstance('http://rest.coinapi.io/v1/', {
    apikey: import.meta.env.VITE_COIN_API_KEY,
});
