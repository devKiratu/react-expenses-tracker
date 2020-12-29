import React, { useState } from "react";
import AddTransaction from "./AddTransaction";
import Balance from "./Balance";
import History from "./History";
import { AddIncome } from "./Transaction";

import Title from "./Title";

export default function App() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className="app">
				<Title />
				<Balance />
				<History />
				<AddTransaction isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
			<AddIncome isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	);
}
