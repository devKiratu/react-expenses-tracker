import React from "react";
import AddTransaction from "./AddTransaction";
import Balance from "./Balance";
import History from "./History";

import Title from "./Title";

export default function App() {
	return (
		<div className="app">
			<Title />
			<Balance />
			<History />
			<AddTransaction />
		</div>
	);
}
