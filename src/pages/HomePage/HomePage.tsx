import React, { FC } from 'react';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import s from './HomePage.module.scss';

const HomePage: FC = () => {
	return (
		<section className={s.home}>
			<SearchPanel />
		</section>
	);
};

export default HomePage;
