import React from 'react';
import { shallow } from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import '../setupTests.js';
import expenses from '../fixtures/expenses';

test('Should render addexpense page', () => {
    const addExpense = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<AddExpensePage addExpense= {addExpense} history={history}/>)
    expect(wrapper).toMatchSnapshot();
})

// test('Should handle on submit', () => {
//     const addExpense = jest.fn();
//     const history = { push: jest.fn() };
//     const wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
//     wrapper.find('ExpenseForm').prop('addExpense')(expenses[1]);
//     expect(history.push).toHaveBeenLastCalledWith('/');
//     expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
// })
