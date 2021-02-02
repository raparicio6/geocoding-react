import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  addClick: ['url']
});

export const TrackingTypes = Types;
export default Creators;

// eslint-disable-next-line new-cap
export const INITIAL_STATE = Immutable({
  clicks: null
});

const addClick = (state, { url }) => {
  const clicks = state.clicks ? state.clicks : {};
  const urlActualClicks = clicks[url] || 0;

  return state.merge({
    clicks: {
      ...clicks,
      [url]: urlActualClicks + 1
    }
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_CLICK]: addClick
});
