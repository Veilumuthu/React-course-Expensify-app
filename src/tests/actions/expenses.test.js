import {startAddExpense, 
        addExpense, 
        removeExpense,
        startRemoveExpenses, 
        editExpense, 
        startEditExpenses,
        setExpenses, 
        startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

const uid = 'thismyuid';
const defaultAuthState = { auth:{uid} };
beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt }
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test('should setup remove expense action object', () => {
    const actions = removeExpense({ id: '123abc' });
    expect(actions).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});


test('should remove from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    store.dispatch(startRemoveExpenses({id})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
        }).then((snapshot) => {
            expect(snapshot.val()).toBeFalsy();
            done();
    })
});

test('Should setup edit expense action object', () => {
    const action = editExpense('123abc', {note: 'New note value'});
    expect(action).toEqual({
       type: 'EDIT_EXPENSE',
       id: '123abc',
       updates: {
           note: 'New note value'
       }
    })
})

test('should setup edit expense for firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[1].id;
    const updates = { description: 'kite'};
    store.dispatch(startEditExpenses(id, updates)).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type:'EDIT_EXPENSE',
            id,
            updates
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().description).toBe(updates.description)
        done();
    })
})

test('Shoud setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'House',
        amount: 3000,
        note: 'This is one better',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions  = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        })
    })
});

test('should add expense default to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseDefault = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions  = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id:expect.any(String),
                ...expenseDefault
            }
        });
        database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseDefault);
            done();
        })
    })
});

test('should setup set expenses action with object', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    })

});

test('should set expenses shyncronus action', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type:'SET_EXPENSES',
            expenses
        })
        done();
   });
});