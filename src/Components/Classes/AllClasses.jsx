import React from 'react'

function AllClasses() {
  return (
    <div className='flex'>
        <Sidebar />
        <div className='flex flex-col w-screen'>
            <Header />
            <div className='flex flex-col w-full p-10'>
                <p>Classes</p>
            </div>
        </div>
    </div>
  )
}

export default AllClasses