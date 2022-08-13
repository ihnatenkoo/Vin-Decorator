import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage, VariablesPage, VariableInfo } from './pages/';
import { Header } from './components/';

const App: FC = () => {
	return (
		<>
			<Header />
			<main className="container">
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/variables" element={<VariablesPage />}></Route>
					<Route
						path="/variables/:variableId"
						element={<VariableInfo />}
					></Route>
				</Routes>
			</main>
		</>
	);
};

export default App;
