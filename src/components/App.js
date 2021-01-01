import React, { useEffect, useState } from "react";
import AddTransaction from "./AddTransaction";
import Balance from "./Balance";
import History from "./History";
import { AddIncome, AddExpense } from "./Transaction";

import Title from "./Title";

export default function App() {
	const [addIncome, setAddIncome] = useState(false);
	const [addExpense, setAddExpense] = useState(false);
	const [transaction, setTransaction] = useState([]);
	const [totalIncome, setTotalIncome] = useState(0.0);
	const [totalExpenses, setTotalExpenses] = useState(0.0);
	const [balance, setBalance] = useState(0.0);

	useEffect(() => {
		setTotalExpenses(
			transaction
				.slice()
				.filter((item) => item.type === "expense")
				.reduce((acc, val) => acc + val.amount, 0)
		);
		setTotalIncome(
			transaction
				.slice()
				.filter((item) => item.type === "income")
				.reduce((acc, val) => acc + val.amount, 0)
		);
		setBalance(totalIncome - totalExpenses);
	}, [transaction, totalExpenses, totalIncome]);

	return (
		<>
			<div className="app">
				<Title />
				<Balance
					balance={balance}
					setBalance={setBalance}
					totalExpenses={totalExpenses}
					totalIncome={totalIncome}
				/>
				<History transaction={transaction} />
				<AddTransaction
					addIncome={addIncome}
					setAddIncome={setAddIncome}
					addExpense={addExpense}
					setAddExpense={setAddExpense}
				/>
			</div>
			<AddIncome
				addIncome={addIncome}
				setAddIncome={setAddIncome}
				transaction={transaction}
				setTransaction={setTransaction}
			/>
			<AddExpense
				addExpense={addExpense}
				setAddExpense={setAddExpense}
				transaction={transaction}
				setTransaction={setTransaction}
			/>
		</>
	);
}
