import React from "react";

export default function AddTransaction({ isOpen, setIsOpen }) {
	return (
		<div>
			<button className="btn-income" onClick={() => setIsOpen(!isOpen)}>
				Add Income
			</button>
			<button className="btn-expense">Add Expense</button>
		</div>
	);
}
