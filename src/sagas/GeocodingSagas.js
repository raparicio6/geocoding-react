import { put, call, all } from 'redux-saga/effects';

import GeocodingRedux from '../redux/GeocodingRedux';
import {
  ADDRESSES_NOT_MATCHED_ERROR,
  ADDRESS_NOT_MATCHED_ERROR,
  DEFAULT_ERROR,
  Routes
} from '../app/constants';

export function* getGeocodes(api, action) {
  const { addresses, history } = action;
  const [responseOne, responseTwo] = yield all([
    yield call(api.getGeocode, addresses[0]),
    yield call(api.getGeocode, addresses[1])
  ]);

  const isResponseOneOk = responseOne.ok;
  const isResponseTwoOk = responseTwo.ok;
  if (isResponseOneOk && isResponseTwoOk) {
    const locationOneExists = responseOne.data.results.length;
    const locationTwoExists = responseTwo.data.results.length;
    if (locationOneExists && locationTwoExists) {
      const locationOne = responseOne.data.results[0].geometry.location;
      const locationTwo = responseTwo.data.results[0].geometry.location;
      yield put(GeocodingRedux.getGeocodesSuccess([locationOne, locationTwo]));
      yield put(
        GeocodingRedux.getDistanceRequest([
          `${locationOne.lat},${locationOne.lng}`,
          `${locationTwo.lat},${locationTwo.lng}`
        ])
      );
      history.push(Routes.MAP);
    } else if (!locationOneExists && !locationTwoExists) {
      yield put(GeocodingRedux.getGeocodesFailure(ADDRESSES_NOT_MATCHED_ERROR));
    } else if (locationOneExists) {
      yield put(GeocodingRedux.getGeocodesFailure(`${ADDRESS_NOT_MATCHED_ERROR},${addresses[1]}`));
    } else {
      yield put(GeocodingRedux.getGeocodesFailure(`${ADDRESS_NOT_MATCHED_ERROR},${addresses[0]}`));
    }
  } else {
    yield put(GeocodingRedux.getGeocodesFailure(DEFAULT_ERROR));
  }
}

export function* getDistance(api, action) {
  const { locations } = action;
  const response = yield call(api.getDistance, locations[0], locations[1]);

  if (response.ok) {
    yield put(GeocodingRedux.getDistanceSuccess(response.data.distance));
  } else {
    yield put(GeocodingRedux.getDistanceFailure(DEFAULT_ERROR));
  }
}
