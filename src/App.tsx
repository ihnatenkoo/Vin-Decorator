import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import { HomePage, VariablesPage, VariableInfo, Page404 } from './pages/';
import { Header } from './components/';

const App: FC = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<main className="container">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/variables" element={<VariablesPage />} />
						<Route path="/variables/:variableId" element={<VariableInfo />} />
						<Route path="*" element={<Page404 />} />
					</Routes>
				</main>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
