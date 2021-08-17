import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slices/User';

export const store = configureStore({
    reducer: {
        user: userSlice,
    },
});
