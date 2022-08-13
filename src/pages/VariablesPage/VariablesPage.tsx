import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { Spinner, Title, Error, Scroll } from '../../components';

import { GET_VARIABLES } from '../../redux/variablesSlice/variables.slice';

import s from './VariablesPage.module.scss';

export const VariablesPage: FC = () => {
	const dispatch = useAppDispatch();

	const { variables, isLoading, isError } = useAppSelector(
		(state) => state.variables
	);

	useEffect(() => {
		if (!variables.Count) dispatch(GET_VARIABLES());
	}, []);

	if (isLoading) return <Spinner />;
	if (isError) return <Error />;

	return (
		<div className={s.variables}>
			<div className={s.variables__inner}>
				<Title className={s.variables__title}>
					All Variables ({variables.Count})
				</Title>
				<Scroll isVisible>
					<ul className={s.variables__list}>
						{variables.Results.map((item) => (
							<li key={item.ID}>
								<Link to={`/variables/${item.ID}`}>{item.Name}</Link>
							</li>
						))}
					</ul>
				</Scroll>
			</div>
		</div>
	);
};
