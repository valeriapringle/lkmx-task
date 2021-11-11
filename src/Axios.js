import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://lkmx-task-default-rtdb.firebaseio.com/'
});

export default instance;