import React from 'react'
import axios from 'axios'

const App = () => {
  const getData = async ()=>{

  const [userData, setuserData] = useState([]);

    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    setuserData(response.data)
    console.log(response.data)

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