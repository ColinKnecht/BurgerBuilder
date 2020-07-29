import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactburgerbuilder-229b5.firebaseio.com/'
});

export default instance;