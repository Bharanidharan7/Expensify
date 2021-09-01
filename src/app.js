import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

import configureStore from "./store/configureStore";
import { addExpense } from "./action/expenses";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Water bill", amount: 145, createdAt: 987654 })
);
store.dispatch(
  addExpense({ description: "Gas bill", amount: 530, createdAt: 123654 })
);
store.dispatch(
  addExpense({ description: "Rent bill", amount: 9876, createdAt: 456123 })
);

// setTimeout(()=>{
//     store.dispatch(setText('bill'))
// },3000)

const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
