import React from 'react'

const App = () => {
  const getData = ()=>{
    console.log('data aa gaya');

  }
  return (
    <div className='bg-black h-screen text-white'>
      <button
      onClick={getData}
       className='bg-green-600 px-5 py-2 mb-2 active:scale-95 rounded text-white'>get data</button>
    </div>
  )
}

export default App