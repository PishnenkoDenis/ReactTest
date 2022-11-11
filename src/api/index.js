import axios from 'axios';

export const $host = axios.create({
  baseURL: 'https://reqres.in',
});

export const $authHost = axios.create({
  baseURL: 'https://restcountries.com',
});
