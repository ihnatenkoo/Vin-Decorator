import React, { FC, useState, KeyboardEvent } from 'react';

import s from './SearchPanel.module.scss';

const SearchPanel: FC = () => {
	const [search, setSearch] = useState('');

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
				value={search}
				onChange={(e) => setSearch(e.target.value.toUpperCase())}
				onKeyPress={searchHandler}
			/>
		</div>
	);
};

export default SearchPanel;
