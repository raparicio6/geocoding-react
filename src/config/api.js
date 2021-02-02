import apisauce from 'apisauce';

const create = (baseURL = '') => {
  const api = apisauce.create({
    baseURL,
    timeout: 15000
  });

  const getGeocode = address => api.get('/geocode', { address });
  const getDistance = (locationOne, locationTwo) =>
    api.get('/geometric_distance', { locationOne, locationTwo });
  const getReverseGeocode = latlng => api.get('/reverse_geocode', { latlng });

  const addClick = url => api.put('/add_clicks', { clicks: { [url]: 1 } });

  return {
    getGeocode,
    getDistance,
    getReverseGeocode,
    addClick
  };
};

export default {
  create
};
