import axios from 'axios';

const instance = axios.create({
    baseURL:'https://burger-builder-project-a326b.firebaseio.com/'
})

export default instance;