import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { shallow, mount, render } from 'enzyme';
import data from './Data'


describe ('<App />', () => {

  beforeEach(() => {
    const wrapper = shallow(<App />)
  });
  it('should shallow and mount', () => {

    expect(wrapper).toBeDefined();
  })
  it('Should render on the DOM', () => {

    expect(wrapper.find('Weather').length).toEqual(2)
    expect(wrapper.find('SevenHour').length).toEqual(1)
  })

  it('should call render', () => {

    expect(wrapper.render).toBeDefined();
  })
})

