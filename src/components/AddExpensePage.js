import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses'

const AddExpensePage = ({startAddExpense, history}) => {
    const onSubmit = (expense) => {
        startAddExpense(expense)
        history.push('/');
    }
    return (
        <div>
            <div className = "page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Add Expense</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}
// export class AddExpensePage extends React.Component {

//     render() {
//         return (

//         )
//     }
// }

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})
export default connect(undefined, mapDispatchToProps)(AddExpensePage);