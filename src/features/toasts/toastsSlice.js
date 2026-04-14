import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const toastSlice = createSlice({
    name: "toasts",
    initialState,
    reducers: {
        addToast: (state, action) => {
            state.items.push({
                id: crypto.randomUUID().toString(),
                message: action.payload.message,
                type: action.payload.type || 'info',
                duration: action.payload.duration || 2000,
            });
        },
        removeToast: (state, action) => {
            state.items = state.items.filter(toast => toast.id !== action.payload);
        }
    }
})

export const { addToast, removeToast } = toastSlice.actions;
export default toastSlice.reducer;