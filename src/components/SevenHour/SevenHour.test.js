import React from 'react';
import ReactDOM from 'react-dom';
import SevenHour from './SevenHour';
import { shallow, mount, render } from 'enzyme';
import data from '../../../utils/Data';

describe('<SevenHour />', () => {
  let wrapper;
  let forecast = data;

  beforeEach(() => {
    wrapper = shallow(<SevenHour forecast={data} />);
  });

  it('should shallow and mount', () => {
    expect(wrapper).toBeDefined();
  });

  it('should be be match snaps', () => {
    wrapper = mount(<SevenHour forecast={data} />);

    expect(wrapper).toMatchSnapshot();
  });
});
