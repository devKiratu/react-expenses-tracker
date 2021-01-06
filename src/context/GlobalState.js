import React, { createContext, useReducer } from "react";

//initial this.state.

const initialState = {
	transactions: [],

	addIncome: false,
	addExpense: false,
};

// create reducer function
function reducer(state, action) {
	switch (action.type) {
		case "ADD_TRANSACTION":
			return {
				...state,
				transactions: [...state.transactions, action.payload],
			};
		case "OPEN_ADD_INCOME":
			return {
				...state,
				addIncome: action.payload,
			};
		case "OPEN_ADD_EXPENSE":
			return {
				...state,
				addExpense: action.payload,
			};
		default:
			return state;
	}
}
//create context

export const GlobalContext = createContext(initialState);

//provider component

export function GlobalProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<GlobalContext.Provider value={[state, dispatch]}>
			{children}
		</GlobalContext.Provider>
	);
}
