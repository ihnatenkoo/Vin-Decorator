import React, { FC } from 'react';

import s from './Error.module.scss';

export const Error: FC = () => {
	return (
		<div className={s.error}>
			<img src="/images/error.gif" alt="error image" />
			<p>Something went wrong</p>
		</div>
	);
};
