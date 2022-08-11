import React, { FC } from 'react';

import { SearchPanel, SearchInfo, ResentSearches } from '../../components/';

import s from './HomePage.module.scss';

export const HomePage: FC = () => {
	return (
		<div className={s.home}>
			<SearchPanel />
			<div className={s.home__searches}>
				<SearchInfo />
				<ResentSearches />
			</div>
		</div>
	);
};
