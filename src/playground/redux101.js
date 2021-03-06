import { createStore } from 'redux';

//Action generators => function that return ation objects.

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ setBy = 7 } = {}) => ({
    type: 'SET',
    setBy
})

const resetCount = () => ({
    type: 'RESET',
})


const countReducer=(state = { count: 0 }, action) => {

    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            }
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            }
        case "SET":
            return {
                count: action.setBy
            }
        case "RESET":
            return {
                count: 0
            }
        default:
            return state;
    }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})
//unsubscribe();

store.dispatch(incrementCount({ incrementBy: 20 }));

store.dispatch(decrementCount({ decrementBy: 5}));

store.dispatch(setCount({ setBy: 10 }))

store.dispatch(resetCount({}))
