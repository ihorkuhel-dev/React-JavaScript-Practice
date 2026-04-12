import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: localStorage.getItem("token") || null,
        isAuthenticated: !!localStorage.getItem("token"),
    },
    reducers: {
        setCredentials: (state, action) => {
            const {token, ...user} = action.payload;
            state.user = user;
            state.token = token;
            localStorage.setItem("token", token);
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem("token");
        }
    }
})

export const {setCredentials, logout} = authSlice.actions;
export default authSlice.reducer;