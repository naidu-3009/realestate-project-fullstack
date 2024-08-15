import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,  // Fixed typo: currenUser -> currentUser
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,  // Fixed typo: intialState -> initialState
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {  // Fixed typo here
            state.currentUser = action.payload;  // Fixed typo here
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;  // Fixed typo here
export default userSlice.reducer;
