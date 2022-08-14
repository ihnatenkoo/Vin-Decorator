import React, { FC } from 'react';

import { useAppSelector } from '../../hooks';

import { FeatureCard, Spinner, Error, Title } from '../../components/';

import s from './SearchInfo.module.scss';

export const SearchInfo: FC = () => {
	const { Results: listItems, SearchCriteria: vinCode } = useAppSelector(
		(state) => state.search.searchVin
	);
	const { isLoading, isError } = useAppSelector((state) => state.search);

	if (isLoading)
		return (
			<div style={{ width: '500px' }}>
				<Spinner />
			</div>
		);
	if (isError) return <Error />;

	return (
		<>
			{listItems?.length > 0 && (
				<section className={s.search}>
					<Title>Search Information:</Title>
					<div className={s.search__inner}>
						<FeatureCard
							listItems={listItems}
							vinCode={vinCode}
							selectedItem={vinCode}
						/>
					</div>
				</section>
			)}
		</>
	);
};
