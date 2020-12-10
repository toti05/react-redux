import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://localhost:4000/'
});

export default clienteAxios;

