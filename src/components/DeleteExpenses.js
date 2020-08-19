import React from 'react';
import {startDeleteExpense} from '../actions/expenses';
import {connect} from 'react-redux';

class DeleteExpenses extends React.Component {
    onDelete = (expense) => {
        this.props.startDeleteExpense(expense)
    }
    render () {
        return (
            <div className="content-container">
                <button className="button--delete" onClick= {this.onDelete}>Delete Expenses</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startDeleteExpense: (expense) => dispatch(startDeleteExpense(expense))
})
export default connect(undefined, mapDispatchToProps)(DeleteExpenses);