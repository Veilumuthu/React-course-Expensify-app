import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme'; 
import '../setupTests.js';

test('Should render header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
})
