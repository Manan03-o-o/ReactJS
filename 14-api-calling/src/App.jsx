import React from 'react'

const App = () => {
  function getData() {
   fetch('https://jsonplaceholder.typicode.com/todos/1')
  }
  return (
    <div>
      <button onClick={getData}> Get Data</button>
    </div>
  )
}

export default App