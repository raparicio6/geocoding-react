/* eslint-disable react/prop-types */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Addresses from './index';

const middlewares = [];
const mockStore = configureStore(middlewares);
const store = mockStore();

const ReduxProvider = ({ children, reduxStore }) => <Provider store={reduxStore}>{children}</Provider>;
configure({ adapter: new Adapter() });

describe('Addresses', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should render', () => {
    const wrapper = shallow(
      <ReduxProvider reduxStore={store}>
        <Addresses />
      </ReduxProvider>
    );
    expect(wrapper.exists()).toBeTruthy();
  });
});
