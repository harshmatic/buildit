import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Header from './Header';

describe('<Header/>', () => {
  it('should have button and input box to display', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('button')).to.have.length(1);
    expect(wrapper.find('input')).to.have.length(1);
  });
  it('should have search Prop', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.props().onSearch).to.be.defined;
  });
});
