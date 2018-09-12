import React from 'react';
import SevenHour from './SevenHour';
import { shallow, mount, render } from 'enzyme';

describe ('<SevenHour />', () => {

  it('should shallow', () => {
    const wrapper = shallow(<SevenHour />);

    expect(wrapper).toBeDefined();
  });
});