import React from 'react';
import Search from './Search';
import { shallow, mount, render } from 'enzyme';

describe ('<Search />', () => {

  it('should shallow', () => {
    const wrapper = shallow(<Search />);

    expect(wrapper).toBeDefined();
  });
  it('should mount', () => {
    const wrapper = mount(<Search />);
    
    expect(wrapper).toBeDefined();
  });
});