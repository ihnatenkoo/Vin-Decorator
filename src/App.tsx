import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/';
import { Header } from './components/';

const App: FC = () => {
	return (
		<>
			<Header />
			<main className="container">
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/variables" element={<></>}></Route>
					<Route path="/variables/:id" element={<></>}></Route>
				</Routes>
			</main>
		</>
	);
};

export default App;
