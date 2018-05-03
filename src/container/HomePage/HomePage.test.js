import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { describe, it } from 'mocha';
import HomePage from './HomePage';
import Header from '../../components/Header/Header';
import Weather from '../../components/Weather/Weather';
import WeatherRow from '../../components/WeatherRow/WeatherRow';
import home from '../../reducers';

// This allows us to use Redux dev tools.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

// With server rendering, we can grab the preloaded state.
const preloadedState = window.__PRELOADED_STATE__ || {}; // eslint-disable-line
const store = createStore(
  home,
  preloadedState,
  composeEnhancers(applyMiddleware(...middleware))
);
describe('<HomePage/>', () => {
  it('contains an <Header/> component', () => {
    const wrapper = mount(<HomePage store={store} />);
    const state = { tempratures: [],
          error: '',
          isFetching: false,
          lastUpdated: '',
          searchString: '',
          city: {} };
    wrapper.setState(state);
    expect(wrapper.find(Header)).to.have.length(1);
  });

  it('does not contains an <Weather/> component', () => {
    const wrapper = mount(<HomePage store={store} />);
    expect(wrapper.find(Weather)).to.have.length(0);
    expect(wrapper.find('h4.mess').text()).to.equal('Please Search for city above');
  });

  it('does not contains an <WeatherRow/> component', () => {
    const wrapper = mount(<HomePage store={store} />);
    expect(wrapper.find(WeatherRow)).to.have.length(0);
    expect(wrapper.find('h4.mess').text()).to.equal('Please Search for city above');
  });
  it('does not contains an <WeatherRow/> component', () => {
    const wrapper = mount(<HomePage store={store} />);
    wrapper.find(Header).find('.btn').simulate('click');
    expect(wrapper.find('h4').text()).to.equal('Please Search for city above');
  });
});
