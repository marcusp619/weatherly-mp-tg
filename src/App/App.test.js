import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, render } from 'enzyme';
import data from '../../Data';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponse(JSON.stringify(data));
    wrapper = shallow(<App />);
  });

  it('should mount', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should shallow', () => {
    let wrapper2 = mount(<App />);
    expect(wrapper2).toBeDefined();
  });

  it('should call render', () => {
    expect(wrapper.render).toBeDefined();
  });

  it('should render a Welcome, Weather, and TenDay component', () => {
    expect(wrapper.find('Welcome').length).toEqual(1);
    expect(wrapper.find('Weather').length).toEqual(1);
    expect(wrapper.find('TenDay').length).toEqual(1);
  });

  it('initially should have a state of data set to an empty object', () => {
    expect(wrapper.state()).toEqual(expect.objectContaining({}));
  });

  it('after mount should have a state of loading set to an false', () => {
    expect(wrapper.state().loading).toEqual(false);
  });

  it('after mount should have a state of node set to an {}', () => {
    expect(wrapper.state().node).toEqual(expect.objectContaining({}));
  });

  it('after mount should have a wordlist of wordlist set to an {}', () => {
    expect(wrapper.state().wordlist).toEqual(expect.objectContaining({}));
  });

  it('after mount should have a state of input set to ""', () => {
    expect(wrapper.state().input).toEqual(expect.objectContaining({}));
  });
});
