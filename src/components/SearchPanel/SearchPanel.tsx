import React, { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useForm } from 'react-hook-form';

import { SEARCH_VIN } from '../../redux/searchSlice/search.slice';

import { useAppDispatch, useAppSelector } from '../../hooks/';
import { sliceText } from '../../utils/';

import s from './SearchPanel.module.scss';

type FormData = {
	vin: string;
};

export const SearchPanel: FC = () => {
	const [showRespMsg, setShowRespMsg] = useState(false);
	const dispatch = useAppDispatch();

	const responseMessage = useAppSelector(
		(state) => state.search.searchVin.Message
	);

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<FormData>();

	const inputValue = watch('vin');

	const submit = handleSubmit((data: FormData) => {
		setShowRespMsg((prevState) => !prevState);
		reset();
		dispatch(SEARCH_VIN(data.vin.toUpperCase().trim()));
	});

	return (
		<section className={s.search}>
			<form onSubmit={submit} className={s.search__form}>
				<div className={s.search__form_wrapper}>
					<input
						{...register('vin', {
							required: '*Field is Required',
							maxLength: { value: 17, message: '*Max length - 17' },
							pattern: {
								value: /^[A-Za-z0-9]+$/i,
								message: '*Incorrect Vin code',
							},
						})}
						placeholder="Enter vehicle VIN code..."
						className={s.search__form_input}
					/>
					{inputValue && inputValue.length && (
						<div className={s.search__clear} onClick={() => reset()}>
							<span className="material-icons-outlined">close</span>
						</div>
					)}
					<CSSTransition
						in={showRespMsg}
						timeout={2000}
						classNames="form-response"
						mountOnEnter
						unmountOnExit
					>
						<p className={s.search__form_response}>
							{sliceText(responseMessage)}
						</p>
					</CSSTransition>

					<p className={s.search__form_warn}>
						{errors.vin?.message?.toString()}
					</p>
				</div>

				<button type="submit" className={s.search__form_btn}>
					Search
				</button>
			</form>
		</section>
	);
};
