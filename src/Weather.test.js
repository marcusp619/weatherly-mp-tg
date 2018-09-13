import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './Weather'
import { shallow, mount, render } from 'enzyme';
import data from './Data'

describe ('<Weather />', () => {
  let wrapper;
  let forecast = data
  beforeEach(() => {
    wrapper = shallow(<Weather forecast={data} />)
  });

  it('should shallow and mount', () => {

    expect(wrapper).toBeDefined();
  })

  it('should call render', () => {

    expect(wrapper.render).toBeDefined();
  })

  it('should be be match snaps', () => {
    let wrapper2 = mount(<Weather forecast={data} />)

    expect(wrapper2).toMatchSnapshot();
  })
})
