import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { shallow, mount, render } from 'enzyme';

describe ('<App />', () => {

  it('should shallow and mount', () => {
    let wrapper = mount(<App />)

    expect(wrapper).toBeDefined();
  })
  it('Should render on the DOM', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('Weather').length).toEqual(2)
    expect(wrapper.find('SevenHour').length).toEqual(1)
  })

  it('should call render', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.render).toBeDefined();
  })
})