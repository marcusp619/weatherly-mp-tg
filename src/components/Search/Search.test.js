import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search'
import { shallow, mount, render } from 'enzyme';

describe ('<Search />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />)
  });

  it('should shallow and mount', () => {

    expect(wrapper).toBeDefined();
  })

  it('should call render', () => {

    expect(wrapper.render).toBeDefined();
  })

  it('should be be match snaps', () => {
    wrapper = mount(<Search weekday='10' image='10' high='10' low='10' time='10' temp='10' />)

    expect(wrapper).toMatchSnapshot();
  })
})
