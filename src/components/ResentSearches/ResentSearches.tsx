import React, { FC, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { useAppSelector } from '../../hooks';

import { Title, FeatureCard } from '../../components/';

import s from './ResentSearches.module.scss';

export const ResentSearches: FC = () => {
	const { recentSearches } = useAppSelector((state) => state.search);

	const [selectedItem, setSelectedItem] = useState<string>('');

	return (
		<section className={s.recent}>
			<Title>Resent Searches:</Title>
			{!recentSearches.length && (
				<p className={s.recent__empty}>Search list is empty</p>
			)}

			{!!recentSearches.length && (
				<div className={s.recent__inner}>
					<TransitionGroup>
						{recentSearches?.map((data) => (
							<CSSTransition
								key={data.SearchCriteria}
								timeout={500}
								classNames="feature-card"
							>
								<FeatureCard
									listItems={data.Results}
									vinCode={data.SearchCriteria}
									selectedItem={selectedItem}
									setSelectedItem={setSelectedItem}
									key={data.SearchCriteria}
								/>
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
			)}
		</section>
	);
};
