import { call } from 'redux-saga/effects';

export function* addClick(api, action) {
  const { url } = action;
  yield call(api.addClick, url);
}
