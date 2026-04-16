import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        setUserInfo: (state, action) => {
            const { ...user} = action.payload;
            state.user = user;
        }
    }
})

export const {setUserInfo} = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;