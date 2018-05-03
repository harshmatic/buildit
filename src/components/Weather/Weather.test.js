import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it } from 'mocha';

import Weather from './Weather';

describe('<Weather/>', () => {
  it('should have city and country name', () => {
    const city = { country: 'US',
        name: 'Canada'
        };
    const summary = { '2018-05-03': { 'date': 'Thursday, 3rd May', 'main': 'clear sky', 'low': 21, 'high': 30, 'humidity': 50, 'average': 27 }, '2018-05-04': { 'date': 'Friday, 4th May', 'main': 'clear sky', 'low': 12, 'high': 27, 'humidity': 52, 'average': 20 }, '2018-05-05': { 'date': 'Saturday, 5th May', 'main': 'clear sky', 'low': 11, 'high': 29, 'humidity': 49, 'average': 20 }, '2018-05-06': { 'date': 'Sunday, 6th May', 'main': 'clear sky', 'low': 13, 'high': 28, 'humidity': 52, 'average': 20 }, '2018-05-07': { 'date': 'Monday, 7th May', 'main': 'clear sky', 'low': 10, 'high': 26, 'humidity': 60, 'average': 17 }, '2018-05-08': { 'date': 'Tuesday, 8th May', 'main': 'broken clouds', 'low': 17, 'high': 24, 'humidity': 31, 'average': 20 } };
    const wrapper = shallow(<Weather temp={summary} city={city} />);
    expect(wrapper.find('div.country').text()).to.equal('Canada -US');
  });
});
