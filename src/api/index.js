import axios from 'axios';

const $host = axios.create({
  baseURL: 'https://reqres.in',
});

export default $host;
