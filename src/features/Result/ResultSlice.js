import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const Result = createSlice({
    name: "Result",
    initialState,
    reducers: {
        setResult: (state, action) => {
            state.value = action.payload;
        },
        removeResult: (state, action) => {
            state.value = state.value.filter(
                (notice) => notice.id !== action.payload
            );
        },
    },
});

export const { setResult, removeResult } = Result.actions;

export default Result.reducer;