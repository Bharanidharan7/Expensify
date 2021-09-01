

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
}
)

const expenseOne = store.dispatch(addExpense({ description: 'sdfd', amount: 1000 ,createdAt:350000}));
const expenseTwo = store.dispatch(addExpense({ description: 'sdfsdfea', amount: 20000,createdAt:25000 }))

// store.dispatch(removeExpense(expenseOne.expense.id))

// store.dispatch(editExpense(expenseTwo.expense.id, {amount:50000}))

// store.dispatch(setText('re'));
// store.dispatch(setText(''))

store.dispatch(sortByAmount());
store.dispatch(sortByDate())

// store.dispatch(setStartDate(2501));
// // store.dispatch(setStartDate())
// store.dispatch(setEndDate(2502))
const demoState = {
    expenses: [{
        id: 123143,
        description: 'January rent',
        note: 'rents',
        amount: 1450000,
        createdAt: 0
    }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}


