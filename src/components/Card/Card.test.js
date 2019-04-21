import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'
import { shallow, mount, render } from 'enzyme';

describe ('<Card />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />)
  });

  it('should shallow and mount', () => {

    expect(wrapper).toBeDefined();
  })

  it('should call render', () => {

    expect(wrapper.render).toBeDefined();
  })

  it('should be be match snaps', () => {
    wrapper = mount(<Card weekday='10' image='10' high='10' low='10' time='10' temp='10' />)

    expect(wrapper).toMatchSnapshot();
  })
})
