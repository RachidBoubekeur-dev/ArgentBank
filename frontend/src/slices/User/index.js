import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        id: null,
        email: null,
        firstName: null,
        lastName: null,
        token: null,
        createdAt: null,
        updatedAt: null,
        status: 'disconnect',
    },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        profile: (state, action) => {
            state.user = { ...action.payload };
        },
        update: (state, action) => {
            state.user = { ...action.payload };
        },
        logout: (state) => {
            state.user = {
                id: null,
                email: null,
                firstName: null,
                lastName: null,
                token: null,
                createdAt: null,
                updatedAt: null,
                status: 'disconnect',
            };
        },
    },
});

export const { profile, update, logout } = userSlice.actions;

export default userSlice.reducer;
