import React from 'react';
import Card from './Card';
import { shallow, mount, render } from 'enzyme';

describe ('<Card />', () => {

  it('should shallow', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper).toBeDefined();
  });
  it('should mount', () => {
    const wrapper = mount(<Card />);
    
    expect(wrapper).toBeDefined();
  });
});