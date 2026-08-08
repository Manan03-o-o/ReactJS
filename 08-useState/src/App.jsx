import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [username, setUserName] = useState('alice')
  const [users, setUsers] = useState([10, 20, 30, 40])

  function changeNum(){
    setNum(20)
    setUserName('bob')
  }
  return (
    <div>
      <h1>Value of num is {num}</h1>
      <p>Username: {username}</p>
      <button onClick={changeNum}>click</button>
    </div>
  )
}

export default App