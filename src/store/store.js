import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import homeReducer from './homeSlice';
import { hotelApi } from '../services/hotel';

export const store = configureStore({
	reducer: {
		user: userReducer,
		home: homeReducer,
		[hotelApi.reducerPath]: hotelApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(hotelApi.middleware),
});
