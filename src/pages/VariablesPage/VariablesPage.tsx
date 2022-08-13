import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { Spinner, Title, Error } from '../../components';

import {
	GET_VARIABLES,
	SET_VARIABLE_INFO,
} from '../../redux/variablesSlice/variables.slice';

import s from './VariablesPage.module.scss';

export const VariablesPage: FC = () => {
	const dispatch = useAppDispatch();

	const { variables, isLoading, isError } = useAppSelector(
		(state) => state.variables
	);

	useEffect(() => {
		dispatch(GET_VARIABLES());
	}, []);

	if (isLoading) return <Spinner />;
	if (isError) return <Error />;

	return (
		<div className={s.variables}>
			<div className={s.variables__inner}>
				<Title className={s.variables__title}>
					All Variables ({variables.Count})
				</Title>
				<ul className={s.variables__list}>
					{variables.Results.map((item) => (
						<li key={item.ID} onClick={() => dispatch(SET_VARIABLE_INFO(item))}>
							<Link to={`/variables/${item.ID}`}>{item.Name}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
