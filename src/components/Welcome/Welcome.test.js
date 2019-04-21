import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
import { shallow, mount, render } from 'enzyme';
import data from '../../../utils/Data';

describe('<Welcome />', () => {
  let wrapper;
  let forecast = data;

  beforeEach(() => {
    wrapper = shallow(
      <Welcome
        handleSearchChange="10"
        suggestCity="10"
        node="10"
        wordlist="10"
      />
    );
  });

  it('should shallow and mount', () => {
    expect(wrapper).toBeDefined();
  });
  it('should call render', () => {
    expect(wrapper.render).toBeDefined();
  });

  it('should be be match snaps', () => {
    wrapper = mount(<Welcome forecast={data} />);

    expect(wrapper).toMatchSnapshot();
  });
});
