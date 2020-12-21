
import axios from 'axios';

const api = axios.create({

    baseURL: 'https://stockx.com/api',

});

export default api;