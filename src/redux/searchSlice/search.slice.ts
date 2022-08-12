import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { IState, IVinResponse } from './types';

export const SEARCH_VIN = createAsyncThunk<IVinResponse, string>(
	'search/GET_DATA',
	async (vin) => {
		const response = await fetch(
			`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`
		);
		const data = await response.json();
		return data;
	}
);

const initialState: IState = {
	recentSearches: [],
	searchVin: {
		Count: 0,
		Message: '',
		SearchCriteria: '',
		Results: [],
	},
	isLoading: false,
	isError: false,
};

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(SEARCH_VIN.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(SEARCH_VIN.fulfilled, (state, action) => {
				if (
					!state.recentSearches.some(
						(item) => item.SearchCriteria === action.payload.SearchCriteria
					)
				) {
					state.recentSearches.length === 5
						? state.recentSearches.splice(0, 1)
						: null;

					state.recentSearches.push(action.payload);
				}

				state.searchVin = action.payload;
				state.isLoading = false;
			})
			.addCase(SEARCH_VIN.rejected, (state) => {
				state.isError = true;
				state.isLoading = false;
			});
	},
});

const { reducer } = searchSlice;
export default reducer;
