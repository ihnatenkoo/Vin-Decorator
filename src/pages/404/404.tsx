import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import s from './404.module.scss';

export const Page404: FC = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const timer = setTimeout(() => navigate('/'), 3000);
		return () => clearTimeout(timer);
	}, [navigate]);

	return (
		<div className={s.p404}>
			<div className={s.p404__main}>404</div>
			<h3 className={s.p404__title}>Page not Found</h3>
			<span className={s.p404__subtitle}>Redirecting to home...</span>
			<div />
		</div>
	);
};
