import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-4f829.firebaseio.com/'
});

export default instance;