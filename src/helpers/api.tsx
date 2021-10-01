import axios from 'axios';

export default axios.create({
  baseURL: 'https://ces-ic-2021.herokuapp.com',
  headers: { 'Access-Control-Allow-Origin': '*' }
});