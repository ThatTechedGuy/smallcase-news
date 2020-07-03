import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.smallcase.com/news'
});

export default instance;