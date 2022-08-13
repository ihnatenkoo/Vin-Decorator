import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../hooks';
import { clearTextFromMarkup } from '../../utils/clearTextFromMarkup';

import { Title } from '../../components';

import s from './VariableInfo.module.scss';

export const VariableInfo: FC = () => {
	const { variableInfo } = useAppSelector((state) => state.variables);
	const { Name, GroupName, Description } = variableInfo;

	return (
		<section className={s.variable}>
			<div className={s.variable__back}>
				<span className="material-icons-outlined">keyboard_backspace</span>
				<Link to="/variables">Back to all variables</Link>
			</div>

			<Title>Variable Information</Title>
			{variableInfo.ID ? (
				<article className={s.variable__article}>
					<h3 className={s.variable__article_title}>
						{GroupName}: {Name}
					</h3>
					{clearTextFromMarkup(Description)}
				</article>
			) : (
				<p className={s.variable__empty}>No selected variable</p>
			)}
		</section>
	);
};
