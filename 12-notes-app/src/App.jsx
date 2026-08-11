import React from 'react'

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault()
   console.log("form submitted")
  }
  return (
    <div className="h-screen bg-black text-white">
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className="flex justify-between items-start   p-10">
       <div className='flex items-start w-1/2 flex-col gap-4'>
         <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5  py-2  w-full font-medium border-2 rounded"
        />

        <textarea
          type="text"
          placeholder="Write Details"
          className="px-5 w-full h-40 py-2 font-medium border-2 rounded"
        />

        <button className='bg-amber-50 w-full font-medium  text-black px-5 py-2 rounded'>Add Note</button>
       </div>
      </form>
    </div>
  )
}

export default App