import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  return (
    <div>
      <h1>{num}
      </h1>
      <button>increase</button>
      <button>decrease</button>
    </div>
  )
}

export default App