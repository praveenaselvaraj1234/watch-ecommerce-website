import axios from 'axios';

export const authaxios = axios.create({
  baseURL: 'https://681da16cf74de1d219b06871.mockapi.io/api/todo',
});
