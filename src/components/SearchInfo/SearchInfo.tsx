import React from 'react';

import { useAppSelector } from '../../hooks';

import { FeatureCard } from '../../components/';

import s from './SearchInfo.module.scss';

export const SearchInfo = () => {
	const { Results: listItems, SearchCriteria: vinCode } = useAppSelector(
		(state) => state.reducer.searchVin.response
	);

	return (
		<>
			{listItems.length > 0 && (
				<section className={s.search}>
					<h2 className={s.search__title}>Search Information:</h2>
					<div className={s.search__inner}>
						<FeatureCard
							listItems={listItems}
							vinCode={vinCode}
							isOpen={true}
						/>
					</div>
				</section>
			)}
		</>
	);
};
