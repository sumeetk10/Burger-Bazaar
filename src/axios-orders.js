import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-32e6a-default-rtdb.firebaseio.com/'
});

export default instance;