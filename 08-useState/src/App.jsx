import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  return (
    <div>
      <h1>Value of a is {num}</h1>
      <button onClick={() => setNum(num + 1)}>click</button>
    </div>
  )
}

export default App