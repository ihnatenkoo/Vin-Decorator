import { configureStore } from '@reduxjs/toolkit';

import reducer from '../vinDecorator.slice';

export const store = configureStore({
	reducer: { reducer },
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
