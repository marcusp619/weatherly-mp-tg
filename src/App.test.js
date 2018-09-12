import React from 'react';
import App from './App';
import { shallow, mount, render } from 'enzyme';

describe ('<App />', () => {
  it('componentDidMount should fetch, and update state', async () => {
    const renderedComponent = await shallow(<App />)
    await renderedComponent.update()
    expect(renderedComponent.state('data').length).toEqual(1);
  })
});