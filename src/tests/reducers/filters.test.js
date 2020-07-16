import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'',
        startDate: moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})

test('Should set sortby to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
})

test('Should set sortby to date', () => {
    const currentState = {
        text:'',
        startDate:undefined,
        enddate:undefined,
        sortBy: 'amount'
    }
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date')
})

test('Should set textfilter', () => {
    const text = 'This is me';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe( text )
})

test('Should set start filter', () => {
    const startDate = moment(0);
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(startDate)
})

test('Should set end filter', () => {
    const endDate = moment(0);
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(endDate)
})