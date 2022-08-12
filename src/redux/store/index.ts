import { configureStore } from '@reduxjs/toolkit';

import search from '../searchSlice/search.slice';
import variables from '../variablesSlice/variables.slice';

export const store = configureStore({
	reducer: { search, variables },
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
