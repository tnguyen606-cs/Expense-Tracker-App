// useRedecer is a React hook
import React, { createContext, useReducer } from 'react';

// Initial state: which is a single obj, any global state will go to this obj
const initialState = {
    budget: 2000,
    expense: [ // a dummy expense
        {id: 1, name: "Shopping", amount: 100},
        {id: 2, name: "Fuel", amount: 200},
    ]
}

// Create context
export const AppContext = createContext();

// App Reducer spcifies the application state changes in response to certain actions to our store
const AppReducer = (state, action) => {
    switch(action.type) { // action.type = id
        case 'ADD_EXPENSE':
            return {
                ...state,
                expense: [...state.expense, action.payload],
            }
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expense: state.expense.filter((expense) => expense.id !== action.payload),
            }
        default:
            return state;
    }
}

// Provider component to pass our initial state for other components to have access to our global state
export const AppProvider = ({children}) => {
    // this gives us a current state and also a function to update the state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(<AppContext.Provider value={{
        budget: state.budget,
        expense: state.expense,
        dispatch,
    }}>
        {children}
    </AppContext.Provider>)
}