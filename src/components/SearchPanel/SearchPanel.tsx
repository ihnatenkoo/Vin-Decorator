import React, { FC, useState, KeyboardEvent } from 'react';

import s from './SearchPanel.module.scss';

const SearchPanel: FC = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const searchHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			console.log('pressed enter');
		}
	};

	return (
		<div className={s.search}>
			<input
				type="text"
				className={s.search__input}
				placeholder="Enter vehicle VIN code..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
				onKeyPress={searchHandler}
			/>
			{searchTerm && (
				<button onClick={() => setSearchTerm('')} className={s.search__clear}>
					<span className="material-icons-outlined">close</span>
				</button>
			)}
		</div>
	);
};

export default SearchPanel;
