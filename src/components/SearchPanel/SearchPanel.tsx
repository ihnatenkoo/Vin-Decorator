import React, { FC, useState, KeyboardEvent, ChangeEvent } from 'react';

import { SEARCH_VIN } from '../../redux/searchSlice/search.slice';

import { useAppDispatch } from '../../hooks/useAppDispatch';

import s from './SearchPanel.module.scss';

export const SearchPanel: FC = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');

	const dispatch = useAppDispatch();

	const searchHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
		if (e.key === 'Enter') {
			dispatch(SEARCH_VIN(searchTerm));
			setSearchTerm('');
		}
	};

	const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		const value = e.target.value.toUpperCase().trim();
		setSearchTerm(value);
	};

	const cleanHandler = (): void => setSearchTerm('');

	return (
		<section className={s.search}>
			<input
				type="text"
				className={s.search__input}
				placeholder="Enter vehicle VIN code..."
				value={searchTerm}
				onChange={changeHandler}
				onKeyPress={searchHandler}
			/>
			{searchTerm && (
				<button onClick={cleanHandler} className={s.search__clear}>
					<span className="material-icons-outlined">close</span>
				</button>
			)}
		</section>
	);
};
