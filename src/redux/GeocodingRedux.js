// @Vendors
import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  getGeocodesRequest: ['addresses'],
  getGeocodesSuccess: ['locations'],
  getGeocodesFailure: ['error'],

  cleanError: []
});

export const GeocodingTypes = Types;
export default Creators;

// eslint-disable-next-line new-cap
export const INITIAL_STATE = Immutable({
  requesting: false,
  locations: [],
  error: ''
});

const getGeocodesRequest = state =>
  state.merge({
    requesting: true,
    error: ''
  });

const getGeocodesSuccess = (state, { locations }) =>
  state.merge({
    requesting: false,
    error: '',
    locations
  });

const getGeocodesFailure = (state, { error }) =>
  state.merge({
    requesting: false,
    error
  });

const cleanError = state => state.merge({ error: '' });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_GEOCODES_REQUEST]: getGeocodesRequest,
  [Types.GET_GEOCODES_SUCCESS]: getGeocodesSuccess,
  [Types.GET_GEOCODES_FAILURE]: getGeocodesFailure,

  [Types.CLEAN_ERROR]: cleanError
});
