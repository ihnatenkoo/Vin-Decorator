import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { IState, vinQueryResponse } from './types/';

export const SEARCH_VIN = createAsyncThunk<vinQueryResponse, string>(
	'vinDecorator/SEARCH_DATA',
	async (vin) => {
		const response = await fetch(
			`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`
		);
		const data = await response.json();
		return data;
	}
);

const initialState: IState = {
	searchVin: {
		response: {
			Count: 0,
			Message: '',
			SearchCriteria: '',
			Results: [],
		},
		isLoading: false,
		isError: false,
	},
};

const vinDecoratorSlice = createSlice({
	name: 'vinDecorator',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(SEARCH_VIN.pending, (state) => {
				state.searchVin.isLoading = true;
				state.searchVin.isError = false;
			})
			.addCase(
				SEARCH_VIN.fulfilled,
				(state, action: PayloadAction<vinQueryResponse>) => {
					state.searchVin.response = action.payload;
					state.searchVin.isLoading = false;
				}
			)
			.addCase(SEARCH_VIN.rejected, (state) => {
				state.searchVin.isError = true;
				state.searchVin.isLoading = false;
			});
	},
});

const { reducer } = vinDecoratorSlice;
export default reducer;
