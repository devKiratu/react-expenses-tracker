import React from "react";
import { IncomeTransaction, ExpenseTransaction } from "./Transaction";

export default function History() {
	return (
		<div className="history-card">
			<p className="history-card-title">History</p>
			<div className="history-card-content">
				<IncomeTransaction />
				<ExpenseTransaction />
				<IncomeTransaction />
				<ExpenseTransaction />
				<IncomeTransaction />
			</div>
		</div>
	);
}
