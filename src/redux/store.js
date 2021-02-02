import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';

import { reducer as geocodingReducer } from './GeocodingRedux';
import { reducer as trackingReducer } from './TrackingRedux';

const store = rootReducer => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const enhancers = [];
  enhancers.push(applyMiddleware(...middlewares));

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
  const stor = createStore(rootReducer, composeEnhancers(...enhancers));

  sagaMiddleware.run(rootSaga);
  return stor;
};

export default () => {
  const appReducer = combineReducers({
    geocoding: geocodingReducer,
    tracking: trackingReducer
  });

  const rootReducer = (state, action) => appReducer(state, action);
  return store(rootReducer);
};
