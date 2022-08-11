import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';

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
