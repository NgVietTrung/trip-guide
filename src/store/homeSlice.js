import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
	name: 'home',
	initialState: { type: 'hotel' },
	reducers: {
		type: (state, action) => {
			state.type = action.payload;
		},
	},
});

export const { type } = homeSlice.actions;

export default homeSlice.reducer;
