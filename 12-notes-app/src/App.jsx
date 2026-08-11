import React from 'react'

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <form className="flex items-start flex-col gap-4 p-10">
       <div>
         <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-1/2 py-2 border-2 rounded"
        />

        <input
          type="text"
          placeholder="Write Details"
          className="px-5 w-1/2 h-20 py-2 border-2 rounded"
        />

        <button className='bg-amber-50 w-1/2 text-black px-5 py-2 rounded'>Add Note</button>
       </div>
      <img src="https://www.bing.com/th/id/OIP.JtTfbqMIHwd30CwhagZdkgHaHa?w=193&h=193&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=ImgAns&rm=2/" alt="Note Image" />
      </form>
    </div>
  )
}

export default App