import { createSlice } from "@reduxjs/toolkit";

export const ExamShedule = createSlice({
    name: "ExamShedule",
    initialState: {
        value: [],
    },
    reducers: {
        addExam: (state, action) => {
            state.value.push(action.payload);
        },
        removeExam: (state, action) => {
            state.value = state.value.filter((exam) => exam.id !== action.payload);
        },
    },
});

export const { addExam, removeExam } = ExamShedule.actions;