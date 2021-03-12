import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-63ba3.firebaseio.com/'
});

export default instance;