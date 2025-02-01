import React, { useState } from 'react'

function Subject() {
    const [subjects, setSubjects] = useState([]);
    const [subjectDeatils, setSubjectDeatils] = {
        subjectName: '',
        subjectType: '',
        class: '',
        Date: ''
    }
  return (
    <div className='w-full h-auto px-10 py-10'>
        <p className='text-5xl font-semibold'>All Subjects</p>
        <div className='w-full h-auto flex flex-row gap-10 mt-10'>
            <div className='w-1/3 bg-slate-300 px- h-auto p-10 rounded-lg'>
                <p className='text-4xl font-semibold'>Add New Subject</p>
                <form 
                className='w-[85%]'
                action="">
                    <p className='mt-5 text-xl mb-2'>Subject Name</p>
                    <input 
                    placeholder='Enter Subject Name'
                    className='w-full px-4 py-4 rounded-lg'
                    type="text" />
                    <p className='mt-5 text-xl mb-2'>Subject Type</p>
                    <select
                    className='w-full px-4 py-4 rounded-lg'
                    >Please Select</select>
                    <p className='mt-5 text-xl mb-2'>Select Class</p>
                    <select
                    className='w-full px-4 py-4 rounded-lg'
                    >Please Select</select>
                    <p className='mt-5 text-xl mb-2'>Select Code</p>
                    <select
                    className='w-full px-4 py-4 rounded-lg'
                    >Please Select</select>
                    <div className='w-full flex gap-10 flex-row mt-10 text-white'>
                        <input
                        className='px-10 text-2xl font-semibold py-2 bg-yellow-600 rounded-lg'
                         type="submit" value='Save' />
                        <input 
                        className='px-10 text-2xl font-semibold py-2 bg-blue-950 rounded-lg'
                        type="submit" value='Reset' />
                    </div>
                </form>
            </div>
            <div className='w-2/3 bg-slate-300 px- h-auto p-10 rounded-lg'>
                <p className='text-4xl font-semibold'>All Subjects</p>
                <div>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Subject Name</th>
                            <th>Subject Type</th>
                            <th>Class</th>
                            <th>Date</th>
                        </tr>
                        
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subject