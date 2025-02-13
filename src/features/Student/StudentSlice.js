import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const Student = createSlice({
    name: "Student",
    initialState,
    reducers: {
        setStudent: (state, action) => {
            state.value = action.payload;
        },
        removeStudent: (state, action) => {
            state.value = state.value.filter((student) => student.id !== action.payload);
        },
    },
});

export default Student.reducer;

export const { setStudent, removeStudent } = Student.actions;