import React from 'react';
import TenDay from './TenDay';
import { shallow, mount, render } from 'enzyme';

describe ('<TenDay />', () => {

  it('should shallow', () => {
    const wrapper = shallow(<TenDay />);

    expect(wrapper).toBeDefined();
  });
  it('should mount', () => {
    const wrapper = mount(<TenDay />);
    
    expect(wrapper).toBeDefined();
  });
});