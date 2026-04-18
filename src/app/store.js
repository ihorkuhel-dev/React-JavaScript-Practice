import {configureStore} from '@reduxjs/toolkit';
import authReducer from "../features/auth/model/authSlice";
import toastReducer from "../features/toasts/toastsSlice";
import userReducer from "../features/user/model/userSlice";
import {baseApi} from '../shared/api/baseApi';

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: authReducer,
        user: userReducer,
        toasts: toastReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});