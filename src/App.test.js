import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { shallow, mount, render } from 'enzyme';
import data from './Data'


describe ('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('should shallow and mount', () => {

    expect(wrapper).toBeDefined();
  })

  it('should call render', () => {

    expect(wrapper.render).toBeDefined();
  })
})

