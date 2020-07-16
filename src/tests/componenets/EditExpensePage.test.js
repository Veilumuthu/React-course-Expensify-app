import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';
import '../setupTests';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn()};
    wrapper = shallow(<EditExpensePage 
        editExpense={editExpense}
        removeExpense={removeExpense}
        history={history}
        expenses={expenses[2]} /> );
})

test('sholud render editexpense page', () => {
    expect(wrapper).toMatchSnapshot();
})

// test('Sholud handle editexpense', () => {
//     wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
//     expect(history.push).toHaveBeenLastCalledWith('/');
//     expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses);
// })

// test('Should handle removeexpense', () => {
//     wrapper.find('button').simulate('click');
//     expect(history.push).toHaveBeenLastCalledWith('/');
//     expect(removeExpense).toHaveBeenLastCalledWith({
//         id: expenses[2].id
//     });
// })