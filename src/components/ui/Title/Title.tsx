import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import cn from 'classnames';
import s from './Title.module.scss';

export const Title: FC<
	DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({ children, className }) => {
	return <h2 className={cn(className, s.title)}>{children}</h2>;
};
