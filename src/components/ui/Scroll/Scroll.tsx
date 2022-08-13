import React, { FC } from 'react';
import OverlayScrollbars from 'overlayscrollbars';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

interface IScroll extends React.HTMLAttributes<HTMLDivElement> {
	customOtp?: OverlayScrollbars.Options;
	isVisible?: boolean;
}

const opt: OverlayScrollbars.Options = {
	scrollbars: { clickScrolling: true },
	overflowBehavior: {
		x: 'hidden',
		y: 'scroll',
	},
};

export const Scroll: FC<IScroll> = ({
	children,
	customOtp,
	isVisible = false,
}) => {
	if (!isVisible)
		return (
			<OverlayScrollbarsComponent
				options={{ scrollbars: { visibility: 'hidden' } }}
			>
				{children}
			</OverlayScrollbarsComponent>
		);
	return (
		<OverlayScrollbarsComponent options={{ ...opt, ...customOtp }}>
			{children}
		</OverlayScrollbarsComponent>
	);
};
