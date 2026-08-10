import React, { useState } from 'react'

const App = () => {
 const [title, setTitle] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form submitted')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }
      } >
        <input type="text" placeholder="Enter your name"
        onChange={(e)=>{
          console.log(e.target)
        }} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App