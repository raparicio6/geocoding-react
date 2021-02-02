/* eslint-disable react/prop-types */
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import CustomButton from '../../components/CustomButton';

import Home from './index';

const middlewares = [];
const mockStore = configureStore(middlewares);
const store = mockStore();

const ReduxProvider = ({ children, reduxStore }) => <Provider store={reduxStore}>{children}</Provider>;
configure({ adapter: new Adapter() });

describe('Home', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should render', () => {
    const wrapper = shallow(
      <ReduxProvider reduxStore={store}>
        <Home />
      </ReduxProvider>
    );
    expect(wrapper.exists()).toBeTruthy();
  });
  xit('has two CustomButton components', () => {
    const wrapper = shallow(
      <ReduxProvider reduxStore={store}>
        <Home />
      </ReduxProvider>
    );
    expect(wrapper.find(CustomButton)).toHaveLength(2);
  });
  xit('matches the snapshot', () => {
    const tree = toJson(mount(<Home />));
    expect(tree).toMatchSnapshot();
  });
});
