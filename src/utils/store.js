import { configureStore } from '@reduxjs/toolkit'
import { ExamShedule } from '../features/ExamSchedule/ExamScheduleSlice.js'
export const store = configureStore({
  reducer: {
    // Add your reducers here
    // For example:
    ExamShedule: ExamShedule.reducer,
    role: (state = { value: localStorage.getItem('role') || '' }, action) => {
      switch (action.type) {
        case 'ASSIGN_ROLE':
          localStorage.setItem('role', action.payload);
          return { value: action.payload }
        default:
          return state
      }
    },
    name: (state = { value: localStorage.getItem('name') || '' }, action) => {
      switch (action.type) {
        case 'ASSIGN_NAME':
          localStorage.setItem('name', action.payload);
          return { value: action.payload }
        default:
          return state
      }
    },
  },
})