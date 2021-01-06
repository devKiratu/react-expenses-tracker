import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export function IncomeTransaction({ name, amount }) {
	return (
		<div className="income-trans">
			<p>{name}</p>
			<p>{amount}</p>
		</div>
	);
}

export function ExpenseTransaction({ name, amount }) {
	return (
		<div className="expense-trans">
			<p>{name}</p>
			<p>{amount}</p>
		</div>
	);
}

export default function History() {
	const [state] = useContext(GlobalContext);
	const { transactions } = state;

	return (
		<div className="history-card">
			<p className="history-card-title">History</p>
			<div className="history-card-content">
				{transactions.map((item) =>
					item.type === "income" ? (
						<IncomeTransaction
							name={item.name}
							amount={new Intl.NumberFormat().format(item.amount.toFixed(2))}
							key={item.id}
						/>
					) : (
						<ExpenseTransaction
							name={item.name}
							amount={new Intl.NumberFormat().format(item.amount.toFixed(2))}
							key={item.id}
						/>
					)
				)}
			</div>
		</div>
	);
}
