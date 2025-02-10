import { configureStore } from '@reduxjs/toolkit';
import NoticeReducer from '../features/Notice/NoticeSlice'
import LibraryReducer from '../features/LibraryList/LibrarySlice'

export const store = configureStore({
  reducer: {
    role: (state = JSON.parse(localStorage.getItem('role')) || { value: '' }, action) => {
      switch (action.type) {
        case 'ASSIGN_ROLE':
          localStorage.setItem('role', JSON.stringify({ value: action.payload }));
          return { value: action.payload }
        default:
          return state;
      }
    },
    name: (state = JSON.parse(localStorage.getItem('name')) || { value: '' }, action) => {
      switch (action.type) {
        case 'ASSIGN_NAME':
          localStorage.setItem('name', JSON.stringify({ value: action.payload }));
          return { value: action.payload }
        default:
          return state;
      }
    },
    Notice: NoticeReducer,
    Library: LibraryReducer,
  },
})