import React from 'react';
import ReactDOM from 'react-dom';
import TenDay from './TenDay'
import { shallow, mount, render } from 'enzyme';
import data from './Data'

describe ('<TenDay />', () => {
  let wrapper;
  let forecast = data
  beforeEach(() => {
    wrapper = shallow(<TenDay forecast={data} />)
  });

  it('should shallow and mount', () => {

    expect(wrapper).toBeDefined();
  })

  it('should call render', () => {

    expect(wrapper.render).toBeDefined();
  })

  it('should be be match snaps', () => {
    let wrapper2 = mount(<TenDay forecast={data} />)

    expect(wrapper2).toMatchSnapshot();
  })
})
