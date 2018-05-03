import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it } from 'mocha';

import WeatherRow from './WeatherRow';

describe('<WeatherRow/>', () => {
    it('should have post', () => {

        let summary = {"2018-05-03":{"date":"Thursday, 3rd May","main":"clear sky","low":21,"high":30,"humidity":50,"average":27}};
        const wrapper = shallow(<WeatherRow post={summary}/>);
        expect(wrapper.find('div.summary').length).to.equal(1);
        expect(wrapper.find('span.high').length).to.equal(1);
        expect(wrapper.find('span.low').length).to.equal(1);
        expect(wrapper.find('span.humidity').length).to.equal(1);
    });

});