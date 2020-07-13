import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import LocalStorageService from '../services/LocalStorageService';

const { Types, Creators } = createActions({
  getGeocodesRequest: ['addresses', 'history'],
  getGeocodesSuccess: ['locations'],
  getGeocodesFailure: ['error'],

  cleanError: [],

  getDistanceRequest: ['locations'],
  getDistanceSuccess: ['distance'],
  getDistanceFailure: ['error']
});

export const GeocodingTypes = Types;
export default Creators;

// eslint-disable-next-line new-cap
export const INITIAL_STATE = Immutable({
  requesting: false,
  error: '',
  locations: [],
  distance: null
});

const getGeocodesRequest = state =>
  state.merge({
    requesting: true,
    error: ''
  });

const getGeocodesSuccess = (state, { locations }) => {
  LocalStorageService.setLocations(locations);

  return state.merge({
    requesting: false,
    error: '',
    locations
  });
};

const getGeocodesFailure = (state, { error }) =>
  state.merge({
    requesting: false,
    error
  });

const cleanError = state => state.merge({ error: '' });

const getDistanceRequest = state =>
  state.merge({
    requesting: true,
    error: ''
  });

const getDistanceSuccess = (state, { distance }) => {
  LocalStorageService.setDistance(distance);

  return state.merge({
    requesting: false,
    error: '',
    distance
  });
};

const getDistanceFailure = (state, { error }) => {
  LocalStorageService.removeDistance();

  return state.merge({
    requesting: false,
    error
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_GEOCODES_REQUEST]: getGeocodesRequest,
  [Types.GET_GEOCODES_SUCCESS]: getGeocodesSuccess,
  [Types.GET_GEOCODES_FAILURE]: getGeocodesFailure,

  [Types.CLEAN_ERROR]: cleanError,

  [Types.GET_DISTANCE_REQUEST]: getDistanceRequest,
  [Types.GET_DISTANCE_SUCCESS]: getDistanceSuccess,
  [Types.GET_DISTANCE_FAILURE]: getDistanceFailure
});
