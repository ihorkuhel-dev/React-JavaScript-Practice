import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../shared/api/baseApi';
import authReducer from "../features/auth/model/authSlice";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});