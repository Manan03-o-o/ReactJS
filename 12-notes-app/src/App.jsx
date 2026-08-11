import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-gray-950 text-white'>
      <form className='felx flex-col gap-4 p-10'>
        <input type="text" placeholder="Enter Notes Heading"
        className='px-5 py-2 border-2 rounded' />
       <input type ="text" className='px-5 py-2 border-rounded' placeholder="Enter Details" />
      </form>
    </div>
  )
}

export default App