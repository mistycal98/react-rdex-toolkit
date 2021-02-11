import { createSlice } from "@reduxjs/toolkit";

// const initialState = {};

const usersSlice = createSlice({
	name: "user/fetchUsers",
	initialState: {
		users: [],
	},
	reducers: {

    },
});

export const { FETCH_USERS } = usersSlice.actions;
export default usersSlice.reducer;
