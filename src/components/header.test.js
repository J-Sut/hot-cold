import React from 'react';
import {shallow} from 'enzyme';

import Header from './header.js';


describe(<Header />, () => {

  it('Renders without crashing', () => {
    shallow(<Header />);
  })

  it('Should have 2 children elements', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('p').children()).to.have.length(2);
  })





})
