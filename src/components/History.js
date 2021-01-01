import React from "react";
import { IncomeTransaction, ExpenseTransaction } from "./Transaction";

export default function History({ transaction }) {
	return (
		<div className="history-card">
			<p className="history-card-title">History</p>
			<div className="history-card-content">
				{transaction.map((item) =>
					item.type === "income" ? (
						<IncomeTransaction
							name={item.name}
							amount={item.amount}
							key={item.id}
						/>
					) : (
						<ExpenseTransaction
							name={item.name}
							amount={item.amount}
							key={item.id}
						/>
					)
				)}
			</div>
		</div>
	);
}
