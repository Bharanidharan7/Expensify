import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './expenseForm'
import { addExpense } from '../action/expenses'

//<p><a href="/create">Go Second</a></p>
const secondExpensePage = (props) => (
    <div>
        <ExpenseForm
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense))
                props.history.push('/')
            }}
        />
    </div>
);
export default connect()(secondExpensePage);
