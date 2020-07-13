import configureStore from 'redux-mock-store';

import GeocodingRedux, { GeocodingTypes } from './GeocodingRedux';

const mockStore = configureStore();
const store = mockStore();

describe('GeocodingRedux actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('GET_GEOCODES_REQUEST', () => {
    test('Dispatches the correct action and parameters', () => {
      const ADDRESS_ONE = '11390 W Olympic Blvd';
      const ADDRESS_TWO = "3 Abbey Rd, St John's Wood";

      const expectedActions = [
        {
          type: GeocodingTypes.GET_GEOCODES_REQUEST,
          addresses: [ADDRESS_ONE, ADDRESS_TWO],
          history: []
        }
      ];

      store.dispatch(GeocodingRedux.getGeocodesRequest([ADDRESS_ONE, ADDRESS_TWO], []));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('GET_DISTANCE_REQUEST', () => {
    test('Dispatches the correct action and parameters', () => {
      const LOCATIONS = ['34.03695,-118.44266', '51.53354,-0.17932'];

      const expectedActions = [
        {
          type: GeocodingTypes.GET_DISTANCE_REQUEST,
          locations: LOCATIONS
        }
      ];

      store.dispatch(GeocodingRedux.getDistanceRequest(LOCATIONS));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('GET_REVERSE_GEOCODES_REQUEST', () => {
    test('Dispatches the correct action and parameters', () => {
      const LOCATIONS = ['34.03695,-118.44266', '51.53354,-0.17932'];

      const expectedActions = [
        {
          type: GeocodingTypes.GET_REVERSE_GEOCODES_REQUEST,
          locations: LOCATIONS,
          history: []
        }
      ];

      store.dispatch(GeocodingRedux.getReverseGeocodesRequest(LOCATIONS, []));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('SET_ERROR', () => {
    test('Dispatches the correct action and parameters', () => {
      const ERROR = 'An error';

      const expectedActions = [
        {
          type: GeocodingTypes.SET_ERROR,
          error: ERROR
        }
      ];

      store.dispatch(GeocodingRedux.setError(ERROR));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('CLEAN_ERROR', () => {
    test('Dispatches the correct action and parameters', () => {
      const expectedActions = [
        {
          type: GeocodingTypes.CLEAN_ERROR
        }
      ];

      store.dispatch(GeocodingRedux.cleanError());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
