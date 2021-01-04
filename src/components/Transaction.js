import React, { useState, useRef, useEffect } from "react";

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

export function AddIncome({
	addIncome,
	setAddIncome,
	transaction,
	setTransaction,
}) {
	const [incomeName, setIncomeName] = useState("");
	const [incomeAmount, setIncomeAmount] = useState("");
	const inputIncome = useRef(null);

	function handleSubmit(e) {
		e.preventDefault();
		setTransaction((prev) => [
			...prev,
			{
				name: incomeName,
				amount: parseFloat(incomeAmount),
				type: "income",
				id: Date.now(),
			},
		]);

		setIncomeName("");
		setIncomeAmount("");
		inputIncome.current.focus();
	}

	useEffect(() => {
		if (addIncome) {
			inputIncome.current.focus();
		} else {
			return;
		}
	}, [addIncome]);

	return (
		<>
			{addIncome ? (
				<div className="modal">
					<div className="modal-content">
						<p>Enter your income details</p>
						<form onSubmit={handleSubmit}>
							<label htmlFor="income">Income name</label>
							<input
								type="text"
								placeholder="e.g salary"
								name="income"
								value={incomeName}
								onChange={(e) => setIncomeName(e.target.value)}
								ref={inputIncome}
							/>
							<label htmlFor="amount">Amount</label>
							<input
								type="text"
								placeholder="e.g 50000"
								name="amount"
								value={incomeAmount}
								onChange={(e) => setIncomeAmount(e.target.value)}
							/>
							<button>Add</button>
						</form>
						<button
							className="exit-modal"
							onClick={() => setAddIncome(!addIncome)}
						>
							Finish
						</button>
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
}

export function AddExpense({
	addExpense,
	setAddExpense,
	transaction,
	setTransaction,
}) {
	const [expenseName, setExpenseName] = useState("");
	const [expenseAmount, setExpenseAmount] = useState("");
	const inputExpense = useRef(null);

	function handleSubmit(e) {
		e.preventDefault();
		setTransaction((prev) => [
			...prev,
			{
				name: expenseName,
				amount: parseFloat(expenseAmount),
				type: "expense",
				id: Date.now(),
			},
		]);

		setExpenseName("");
		setExpenseAmount("");
		inputExpense.current.focus();
	}

	useEffect(() => {
		if (addExpense) {
			inputExpense.current.focus();
		} else {
			return;
		}
	}, [addExpense]);

	return (
		<>
			{addExpense ? (
				<div className="modal">
					<div className="modal-content">
						<p style={{ color: "#e74c3c" }}>Enter your expense details</p>
						<form onSubmit={handleSubmit}>
							<label htmlFor="expense">Expense name</label>
							<input
								type="text"
								placeholder="e.g groceries"
								name="expense"
								value={expenseName}
								onChange={(e) => setExpenseName(e.target.value)}
								ref={inputExpense}
							/>
							<label htmlFor="amount">Amount</label>
							<input
								type="text"
								placeholder="e.g 500"
								name="amount"
								value={expenseAmount}
								onChange={(e) => setExpenseAmount(e.target.value)}
							/>
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
							Finish
						</button>
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
}
