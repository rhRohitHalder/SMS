import { configureStore } from '@reduxjs/toolkit'
import { ExamShedule } from '../features/ExamSchedule/ExamScheduleSlice.js'
export const store = configureStore({
  reducer: {
    // Add your reducers here
    // For example:
    ExamShedule: ExamShedule.reducer,
    role: (state = {value: ''}, action) => {
      switch (action.type) {
        case 'ASSIGN_ROLE':
          return { value: action.payload }
        default:
          return state
      }
    },
  },
})