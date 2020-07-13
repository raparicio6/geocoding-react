import { all, takeLatest } from 'redux-saga/effects';

import API from '../config/api';
import { GeocodingTypes } from '../redux/GeocodingRedux';

import { getGeocodes, getDistance } from './GeocodingSagas';

const baseURL = process.env.REACT_APP_GEOCODING_API_BASE_URL;
const api = API.create(baseURL);

export default function* root() {
  yield all([
    takeLatest(GeocodingTypes.GET_GEOCODES_REQUEST, getGeocodes, api),
    takeLatest(GeocodingTypes.GET_DISTANCE_REQUEST, getDistance, api)
  ]);
}
