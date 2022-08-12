import React, { FC } from 'react';

import './Spinner.scss';

export const Spinner: FC = () => {
	return (
		<div className="spinner">
			<div className="lds-grid">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};
