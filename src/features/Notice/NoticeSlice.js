import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const Notice = createSlice({
    name: "Notice",
    initialState,
    reducers: {
        setNotice: (state, action) => {
            state.value = action.payload;
        },
        removeNotice: (state, action) => {
            state.value = state.value.filter(
                (notice) => notice.id !== action.payload
            );
        },
    },
});

export const { setNotice, removeNotice } = Notice.actions;