import { put, call, all } from 'redux-saga/effects';

import GeocodingRedux from '../redux/GeocodingRedux';
import { ADDRESSES_NOT_MATCHED_ERROR, ADDRESS_NOT_MATCHED_ERROR, DEFAULT_ERROR } from '../app/constants';

export function* getGeocodes(api, action) {
  const { addresses } = action;
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
      yield put(
        GeocodingRedux.getGeocodesSuccess([
          responseOne.data.results[0].geometry.location,
          responseTwo.data.results[0].geometry.location
        ])
      );
      // dispatch calculating distance action
      // history push map screen
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
