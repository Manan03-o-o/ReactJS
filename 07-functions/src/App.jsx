import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('clicked');
  }

  function mouseEnter(){
    console.log('mouse entered');
  }
  return (
    <div>
      <h1>Hello</h1>
      <button onMouseEnter={mouseEnter} onClick={btnClicked}>change user</button>
    </div>
  )
}

export default App