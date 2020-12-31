import React from "react";

export function IncomeTransaction() {
	return (
		<div className="income-trans">
			<p>This was a plus</p>
			<p>50</p>
		</div>
	);
}

export function ExpenseTransaction() {
	return (
		<div className="expense-trans">
			<p>This was a minus</p>
			<p>30</p>
		</div>
	);
}

export function AddIncome({ addIncome, setAddIncome }) {
	return (
		<>
			{addIncome ? (
				<div className="modal">
					<div className="modal-content">
						<p>Enter your income details</p>
						<form>
							<label htmlFor="income">Income name</label>
							<input type="text" placeholder="e.g salary" name="income" />
							<label htmlFor="amount">Amount</label>
							<input type="text" placeholder="e.g 50000" name="amount" />
							<button>Add</button>
						</form>
						<button
							className="exit-modal"
							onClick={() => setAddIncome(!addIncome)}
						>
							Exit
						</button>
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
}

export function AddExpense({ addExpense, setAddExpense }) {
	return (
		<>
			{addExpense ? (
				<div className="modal">
					<div className="modal-content">
						<p style={{ color: "#e74c3c" }}>Enter your expense details</p>
						<form>
							<label htmlFor="expense">Expense name</label>
							<input type="text" placeholder="e.g groceries" name="expense" />
							<label htmlFor="amount">Amount</label>
							<input type="text" placeholder="e.g 500" name="amount" />
							<button
								style={{
									border: "3px solid #e74c3c",
									backgroundColor: "#e74c3c",
								}}
							>
								Add
							</button>
						</form>
						<button
							className="exit-modal"
							style={{ border: "2px solid #e74c3c", color: "#e74c3c" }}
							onClick={() => setAddExpense(!addExpense)}
						>
							Exit
						</button>
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
}
