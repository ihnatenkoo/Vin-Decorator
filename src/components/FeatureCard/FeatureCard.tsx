import React, { FC, useState } from 'react';

import { IVinResult } from '../../redux/searchSlice/types';

import cn from 'classnames';
import s from './FeatureCard.module.scss';
import Scroll from '../ui/Scroll/Scroll';

interface IFeaturesList {
	listItems: Array<IVinResult>;
	vinCode: string;
	isOpen?: boolean;
}

export const FeatureCard: FC<IFeaturesList> = ({
	listItems,
	vinCode,
	isOpen = false,
}) => {
	const [showList, setShowList] = useState<boolean>(isOpen);

	const hasScroll =
		listItems
			.map((item) => {
				if (item.Value) return item;
			})
			.filter((i) => i).length > 5;

	const handleShow = (): void => {
		setShowList((prevState) => !prevState);
	};

	return (
		<article className={s.feature}>
			<header className={s.feature__header} onClick={handleShow}>
				<h3 className={s.feature__header_title}>{vinCode}</h3>

				<button className={s.feature__header_btn}>
					<span className="material-icons-outlined">
						{showList ? 'expand_less' : 'expand_more'}
					</span>
				</button>
			</header>
			<Scroll hasScroll={hasScroll}>
				<ul className={cn(s.feature__list, { [s.show]: showList })}>
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
