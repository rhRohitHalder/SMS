import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const Class = createSlice({
    name: "Class",
    initialState,
    reducers: {
        scheduleClass: (state, action) => {
            state.value = action.payload;
        },
        removeClass: (state, action) => {
            state.value = state.value.filter(
                (classDetails) => classDetails.id !== action.payload
            );
        },
    },
});

export const { scheduleClass, removeClass } = Class.actions;

export default Class.reducer;