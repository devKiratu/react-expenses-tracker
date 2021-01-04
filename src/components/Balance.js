import React from "react";

export default function Balance({
	balance,
	setBalance,
	totalIncome,
	totalExpenses,
}) {
	return (
		<div>
			<div className="your-balance">
				<p>Your Balance</p>
				<p style={{ fontSize: "x-large" }}>
					KES: {new Intl.NumberFormat().format(balance)}
				</p>
			</div>
			<div className="summary-card">
				<div className="card-income">
					<p>Income</p>
					<p style={{ fontSize: "x-large", color: "#2ecc71" }}>
						KES: {new Intl.NumberFormat().format(totalIncome)}
					</p>
				</div>
				<p className="divider">&nbsp;</p>
				<div className="card-expenses">
					<p>Expenses</p>
					<p style={{ fontSize: "x-large", color: "#e74c3c" }}>
						KES: {new Intl.NumberFormat().format(totalExpenses)}
					</p>
				</div>
			</div>
		</div>
	);
}
