import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://127.0.0.1:8000/api/projetos/api/'
// });

const api = axios.create({
  baseURL: 'https://api-portfolio-michel-souza.vercel.app/api/api'
});

export const todosProjetos = () => api.get('/projetos/');
export const criarProjeto = (formData) => api.post('/projetos/', formData);