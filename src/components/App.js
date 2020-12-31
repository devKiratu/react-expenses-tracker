import React, { useState } from "react";
import AddTransaction from "./AddTransaction";
import Balance from "./Balance";
import History from "./History";
import { AddIncome, AddExpense } from "./Transaction";

import Title from "./Title";

export default function App() {
	const [addIncome, setAddIncome] = useState(false);
	const [addExpense, setAddExpense] = useState(false);

	return (
		<>
			<div className="app">
				<Title />
				<Balance />
				<History />
				<AddTransaction
					addIncome={addIncome}
					setAddIncome={setAddIncome}
					addExpense={addExpense}
					setAddExpense={setAddExpense}
				/>
			</div>
			<AddIncome addIncome={addIncome} setAddIncome={setAddIncome} />
			<AddExpense addExpense={addExpense} setAddExpense={setAddExpense} />
		</>
	);
}
