import React from 'react';

import { useAppSelector } from '../../hooks';

import { FeatureCard } from '../../components/';

import s from './ResentSearches.module.scss';

export const ResentSearches = () => {
	const { recentSearches } = useAppSelector((state) => state.search);

	return (
		<section className={s.recent}>
			<h2 className={s.recent__title}>Resent Searches:</h2>
			{recentSearches.length === 0 && (
				<p className={s.recent__empty}>Search list is empty</p>
			)}

			<div className={s.recent__inner}>
				{recentSearches?.map((data) => (
					<FeatureCard
						listItems={data.Results}
						vinCode={data.SearchCriteria}
						key={data.SearchCriteria}
						isOpen={false}
					/>
				))}
			</div>
		</section>
	);
};
