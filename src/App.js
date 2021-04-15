import './App.css'
import Main from './Components/Main'
import { useEffect, useState } from 'react'
function App() {
  const [width, changeWidth] = useState(0)
  useEffect(() => {
    changeWidth(window.innerWidth)
  }, [window.innerWidth])
  return (
    <div className='App'>
      <div className='absolute top-0 left-0'>{width}</div>
      <Main />
    </div>
  )
}

export default App
