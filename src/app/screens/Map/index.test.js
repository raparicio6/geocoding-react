/* eslint-disable react/prop-types */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Map from './index';

const middlewares = [];
const mockStore = configureStore(middlewares);
const store = mockStore();

const ReduxProvider = ({ children, reduxStore }) => <Provider store={reduxStore}>{children}</Provider>;
configure({ adapter: new Adapter() });

describe('Map', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should render', () => {
    const wrapper = shallow(
      <ReduxProvider reduxStore={store}>
        <Map />
      </ReduxProvider>
    );
    expect(wrapper.exists()).toBeTruthy();
  });
});
