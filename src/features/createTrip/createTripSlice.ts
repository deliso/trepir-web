import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface NewTripState {
	name: string;
	location: string;
}

const initialState: NewTripState = {
	name: 'idle',
	location: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const createTripSlice = createSlice({
	name: 'counter',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
		submitStepOne: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
		},
	},
});

export const { submitStepOne } = createTripSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectName = (state: RootState) => state.newTrip.name;

export default createTripSlice.reducer;
