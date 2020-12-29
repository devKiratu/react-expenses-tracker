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

export function AddIncome({ isOpen, setIsOpen }) {
	return (
		<>
			{isOpen ? (
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
						<button className="exit-modal" onClick={() => setIsOpen(!isOpen)}>
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
