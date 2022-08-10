import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import s from './Header.module.scss';
import cn from 'classnames';

const Header: FC = () => {
	const { pathname } = useLocation();

	return (
		<header className={s.header}>
			<h2 className={s.header__title}>Vin Decorator</h2>
			<nav className={s.header__nav}>
				<Link
					to="/"
					className={cn(s.header__nav_item, { [s.active]: pathname === '/' })}
				>
					Home
				</Link>
				<Link
					to="/variables"
					className={cn(s.header__nav_item, {
						[s.active]: pathname.includes('variables'),
					})}
				>
					Variables
				</Link>
			</nav>
		</header>
	);
};

export default Header;
