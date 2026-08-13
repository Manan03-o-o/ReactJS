import React from 'react'

const App = () => {
  sessionStorage.setItem('name', 'John Doe')
  return (
    <div>App</div>
  )
}

export default App