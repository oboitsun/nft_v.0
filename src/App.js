import './App.css'
import Main from './Components/Main'
import { AnimatePresence } from 'framer-motion'
function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className='App'>
        <Main />
      </div>
    </AnimatePresence>
  )
}

export default App
