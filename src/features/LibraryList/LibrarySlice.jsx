import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const Library = createSlice({
    name: 'Library',
    initialState,
    reducers: {
        setLibrary: (state, action) => {
            state.value = action.payload;
        },
        removeLibrary: (state, action) => {
            state.value = state.value.filter(
                (book) => book.id !== action.payload
            );
        },
    },
});

export const { setLibrary, removeLibrary } = Library.actions;

export default Library.reducer;