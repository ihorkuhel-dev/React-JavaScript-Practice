import {createSlice} from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: Cookies.get("token"),
        isAuthenticated: !!Cookies.get("token"),
    },
    reducers: {
        setCredentials: (state, action) => {
            const {accessToken, refreshToken, ...user} = action.payload;
            state.user = user;
            state.token = accessToken;
            state.isAuthenticated = true;
            Cookies.set("token", accessToken, { expires: 1 });
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            Cookies.remove("token");
        }
    }
})

export const {setCredentials, logout} = authSlice.actions;
export default authSlice.reducer;