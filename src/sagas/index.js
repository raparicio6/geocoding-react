import { all, takeLatest } from 'redux-saga/effects';

import API from '../config/api';
import { GeocodingTypes } from '../redux/GeocodingRedux';
import { TrackingTypes } from '../redux/TrackingRedux';

import { getGeocodes, getDistance, getReverseGeocodes } from './GeocodingSagas';
import { addClick } from './TrackingSagas';

const baseURL = process.env.REACT_APP_GEOCODING_API_BASE_URL;
const api = API.create(baseURL);

export default function* root() {
  yield all([
    takeLatest(GeocodingTypes.GET_GEOCODES_REQUEST, getGeocodes, api),
    takeLatest(GeocodingTypes.GET_DISTANCE_REQUEST, getDistance, api),
    takeLatest(GeocodingTypes.GET_REVERSE_GEOCODES_REQUEST, getReverseGeocodes, api),
    takeLatest(TrackingTypes.ADD_CLICK, addClick, api)
  ]);
}
