import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from './Data';
import { shallow, mount, render } from 'enzyme';

describe ('<App />', () => {
  let apiFetch;
  let wrapper;

  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponse(JSON.stringify(data))
    wrapper = shallow(<App />);

  });

  it('should mount', () => {
    expect(wrapper).toBeDefined();
  })
  it('Should shallow', () => {
    let wrapper2 = mount(<App />);
    expect(wrapper2).toBeDefined();
  })

  it.skip('should call render', () => {
    
    expect(wrapper.render).toBeDefined();
  })
  
  it.skip('the data is weather data', done => {

    expect(wrapper.state).toBeDefined();
  })
})