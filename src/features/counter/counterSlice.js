import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
	name: "counter", //Constants

	// Default State
	initialState: {
		value: 0,
	},

	// Defining Reducers
	reducers: {
		// Increment Reducer
		increment: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value += 1;
		},

		// Decrement Reducer
		decrement: (state) => {
			state.value -= 1;
		},

		// Increment by Amount Reducer
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

// Action Generators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// Thunk Middleware
export const incrementAsync = (amount) => (dispatch) => {
	setTimeout(() => {
		dispatch(incrementByAmount(amount));
	}, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

// Exporting the State
export const selectCount = (state) => state.counter.value;

// Exporting the Reducer mapDispatchToProps
export default counterSlice.reducer;
