import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { IState, IVariablesResponse } from './types';

export const GET_VARIABLES = createAsyncThunk<IVariablesResponse>(
	'variables/GET_DATA',
	async () => {
		const response = await fetch(
			`https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`
		);
		const data = await response.json();
		return data;
	}
);

const initialState: IState = {
	variables: {
		Count: 0,
		Message: '',
		SearchCriteria: null,
		Results: [],
	},
	isLoading: false,
	isError: false,
};

const variablesSlice = createSlice({
	name: 'variables',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(GET_VARIABLES.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(GET_VARIABLES.fulfilled, (state, action) => {
				state.variables = action.payload;
			})
			.addCase(GET_VARIABLES.rejected, (state) => {
				state.isError = true;
				state.isLoading = false;
			});
	},
});

const { reducer } = variablesSlice;
export default reducer;
