import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AddUser from './components/AddUser'
import ShowUser from './components/ShowUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <AddUser/>
      <ShowUser/>
    </div>
  )
}

export default App
