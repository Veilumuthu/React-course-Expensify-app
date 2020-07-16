import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpensesList';
import expenses from '../fixtures/expenses';
import '../setupTests.js';

test('Should render ExpenseList', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot();
})
test('Should render ExpenseList with empty', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot();
})