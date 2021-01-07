import React, { createContext, useReducer, useEffect } from "react";

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
		case "LOCAL_STORAGE_VALUES":
			return {
				...state,
				transactions: [...state.transactions, ...action.payload],
			};
		default:
			return state;
	}
}

//create local storage

//create context

export const GlobalContext = createContext(initialState);

//provider component

export function GlobalProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		localStorage.setItem("balanceSheet", JSON.stringify(state.transactions));
	}, [state.transactions]);

	function getLocalItems() {
		let storedSheet = JSON.parse(localStorage.getItem("balanceSheet"));
		console.log("localStorage balanceSheet values are", storedSheet);

		dispatch({
			type: "LOCAL_STORAGE_VALUES",
			payload: storedSheet,
		});
	}

	useEffect(() => {
		getLocalItems();
	}, []);

	return (
		<GlobalContext.Provider value={[state, dispatch]}>
			{children}
		</GlobalContext.Provider>
	);
}
