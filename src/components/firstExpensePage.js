import React from 'react';
import ConnectedExpenseList from './expenseList'
import ExpenseListFilters from './expenseListFilters'
const firstExpensePage = () => (
    <div>
    <ExpenseListFilters/>
    <ConnectedExpenseList/>
    </div>
    );

export default firstExpensePage;