import React from 'react';
import Weather from './Weather';
import { shallow, mount, render } from 'enzyme';

describe ('<Weather />', () => {

  it('should shallow', () => {
    const wrapper = shallow(<Weather />);

    expect(wrapper).toBeDefined();
  });
  it('should mount', () => {
    const wrapper = mount(<Weather />);
    
    expect(wrapper).toBeDefined();
  });
  it('it should render a Search Component', () => {
    const wrapper = shallow(<Weather />);

    expect(wrapper.find('Search').length).toEqual(1);
  });
});