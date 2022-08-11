import React from 'react';

import { useAppSelector } from '../../hooks';

import { FeatureCard } from '../../components/';

import s from './ResentSearches.module.scss';

export const ResentSearches = () => {
	const { recentSearches } = useAppSelector((state) => state.reducer);

	return (
		<section className={s.recent}>
			<h2 className={s.recent__title}>Resent Searches:</h2>
			{recentSearches.length === 0 && (
				<p className={s.recent__warn}>Search list is empty</p>
			)}

			<div className={s.recent__inner}>
				{recentSearches?.map((search) => (
					<FeatureCard
						listItems={search.Results}
						vinCode={search.SearchCriteria}
						key={search.SearchCriteria}
						isOpen={false}
					/>
				))}
			</div>
		</section>
	);
};
