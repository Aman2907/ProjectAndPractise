import { useEffect, useState } from 'react';
import ProgressBar from './components/ProgressBar.jsx'
import './App.css'

function App() {
  const [value, setvalue] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setvalue((val) => val + 1);
    }, 100)
  }, [])

  return (
    <div className='app'>
      <span> Progress Bar </span>
      <ProgressBar value={value} />
    </div>
  )
}

export default App
