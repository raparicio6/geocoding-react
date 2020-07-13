import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import CustomButton from '../../components/CustomButton';

import Home from './index';

configure({ adapter: new Adapter() });

describe('Home', () => {
  it('should render', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.exists()).toBeTruthy();
  });
  it('has two CustomButton components', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(CustomButton)).toHaveLength(2);
  });
  it('matches the snapshot', () => {
    const tree = toJson(mount(<Home />));
    expect(tree).toMatchSnapshot();
  });
});
