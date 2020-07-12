import apisauce from 'apisauce';

const create = (baseURL = '') => {
  const api = apisauce.create({
    baseURL,
    timeout: 15000
  });

  const getGeocode = address => api.get('/geocode', {address})

  return {
    getGeocode
  };
};

export default {
  create
};
