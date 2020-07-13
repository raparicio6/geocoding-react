import apisauce from 'apisauce';

const create = (baseURL = '') => {
  const api = apisauce.create({
    baseURL,
    timeout: 15000
  });

  const getGeocode = address => api.get('/geocode', { address });
  const getDistance = (locationOne, locationTwo) =>
    api.get('/geometric_distance', { locationOne, locationTwo });

  return {
    getGeocode,
    getDistance
  };
};

export default {
  create
};
