import React, { FC, useState } from 'react';

import { IVinResult } from '../../redux/searchSlice/types';

import cn from 'classnames';
import s from './FeatureCard.module.scss';

interface IFeaturesList {
	listItems: Array<IVinResult>;
	vinCode: string;
	isOpen: boolean;
}

export const FeatureCard: FC<IFeaturesList> = ({
	listItems,
	vinCode,
	isOpen,
}) => {
	const [showList, setShowList] = useState<boolean>(isOpen);

	return (
		<article className={s.feature}>
			<header
				className={s.feature__header}
				onClick={() => setShowList((prevState) => !prevState)}
			>
				<h3 className={s.feature__header_title}>{vinCode}</h3>

				<button className={s.feature__header_btn}>
					<span className="material-icons-outlined">
						{showList ? 'expand_less' : 'expand_more'}
					</span>
				</button>
			</header>

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
		</article>
	);
};
