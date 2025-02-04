import { configureStore } from '@reduxjs/toolkit'
import { ExamShedule } from '../features/ExamSchedule/ExamScheduleSlice.js'
export const store = configureStore({
  reducer: {
    // Add your reducers here
    // For example:
    ExamShedule: ExamShedule.reducer,
  },
})