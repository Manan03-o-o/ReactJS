import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  function increaseNum(){

  } 

  function decreaseNum(){

  }

  return (
    <div>
      <h1>{num}
      </h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
    </div>
  )
}

export default App