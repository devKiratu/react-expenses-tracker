import React from "react";

export default function AddTransaction({
	addIncome,
	setAddIncome,
	addExpense,
	setAddExpense,
}) {
	return (
		<div>
			<button className="btn-income" onClick={() => setAddIncome(!addIncome)}>
				Add Income
			</button>
			<button
				className="btn-expense"
				onClick={() => setAddExpense(!addExpense)}
			>
				Add Expense
			</button>
		</div>
	);
}
