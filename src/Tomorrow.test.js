import React from 'react';
import Tomorrow from './Tomorrow';
import { shallow, mount, render } from 'enzyme';

describe ('<Tomorrow />', () => {

  it('should shallow', () => {
    const wrapper = shallow(<Tomorrow />);

    expect(wrapper).toBeDefined();
  });
  it('should mount', () => {
    const wrapper = mount(<Tomorrow />);
    
    expect(wrapper).toBeDefined();
  });
});