import React, { FC } from 'react';

import { IVinResult } from '../../redux/searchSlice/types';

import { Scroll } from '../../components';

import cn from 'classnames';
import s from './FeatureCard.module.scss';

interface IFeaturesList {
	listItems: Array<IVinResult>;
	vinCode: string;
	selectedItem?: string;
	setSelectedItem?: (id: string) => void;
}

export const FeatureCard: FC<IFeaturesList> = ({
	listItems,
	vinCode,
	selectedItem,
	setSelectedItem,
}) => {
	const hasScroll = listItems.filter((i) => i.Value).length > 5;

	const handleShow = (id: string): void => {
		if (!setSelectedItem) return;

		id === selectedItem ? setSelectedItem('') : setSelectedItem(id);
	};

	return (
		<article className={s.feature}>
			<header className={s.feature__header} onClick={() => handleShow(vinCode)}>
				<h3 className={s.feature__header_title}>{vinCode}</h3>

				<button className={s.feature__header_btn}>
					<span className="material-icons-outlined">
						{selectedItem === vinCode ? 'expand_less' : 'expand_more'}
					</span>
				</button>
			</header>
			<Scroll isVisible={hasScroll}>
				<ul
					className={cn(s.feature__list, {
						[s.show]: selectedItem === vinCode,
					})}
				>
					{listItems?.map((item) => {
						if (item.Value) {
							return (
								<li key={item.VariableId}>
									<span className="material-icons-outlined">check</span>
									{item.Variable}: {item.Value}
								</li>
							);
						}
					})}
				</ul>
			</Scroll>
		</article>
	);
};
