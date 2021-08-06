import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: null,
    firstName: null,
    lastName: null,
    status: 'disconnect',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state = action.payload;
        },
        update: (state, action) => {
            state = action.payload;
        },
        logout: (state) => {
            state = {
                id: null,
                fistName: null,
                lastName: null,
                status: 'disconnect',
            };
        },
    },
});

export const { login, update, logout } = userSlice.actions;

export default userSlice.reducer;
