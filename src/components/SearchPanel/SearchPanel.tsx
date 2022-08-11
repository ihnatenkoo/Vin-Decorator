import React, { FC, useState, KeyboardEvent } from 'react';

import { SEARCH_VIN } from '../../redux/vinDecorator.slice';

import { useAppDispatch } from '../../hooks/useAppDispatch';

import s from './SearchPanel.module.scss';

export const SearchPanel: FC = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const dispatch = useAppDispatch();

	const searchHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			dispatch(SEARCH_VIN(searchTerm));
			setSearchTerm('');
		}
	};

	return (
		<section className={s.search}>
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
		</section>
	);
};
