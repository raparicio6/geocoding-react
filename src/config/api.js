import { create } from 'apisauce';

const baseURL = process.env.GEOCODING_API_BASE_URL;

const api = create({
  baseURL,
  timeout: 15000
});

export default api;
