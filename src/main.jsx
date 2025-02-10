import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import Login from './Components/Login/Login.jsx'
import ExamSchedule from './Components/Exam/ExamSchedule.jsx'
import { store } from './utils/store.js'
import Notice from './Components/Notice Board/Notice.jsx'
import NotFoundPage from './Components/ErrorsPages/404Page.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import Routine from './Components/Routine/Routine.jsx'
import Hostel from './Components/Hostel/Hostel.jsx'
import Message from './Components/Message/Message.jsx'
import Attendance from './Components/Attendance/Attendance.jsx'
import AddBooks from './Components/Library/AddBooks.jsx'
import BookList from './Components/Library/BookList.jsx'
import AllClasses from './Components/Classes/AllClasses.jsx'
import AddClass from './Components/Classes/AddClass.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/exam-schedule" element={<ExamSchedule />} />
        <Route path="/notice" element={<Notice />} />
        <Route path='/routine' element={<Routine />} />
        <Route path='/hostel' element={<Hostel />} />
        <Route path='/message' element={<Message />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/Addbook" element={<AddBooks />} />
        <Route path="/BookList" element={<BookList />} />
        <Route path="/classList" element={<AllClasses />} />
        <Route path="/AddClass" element={<AddClass />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)