import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 25 * 60 // 25 minutes.

function App() {
  const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_INITIAL_TIME_IN_SECONDS)

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setSecondsAmount(state => state - 1)
    }, 1000)
    return () => {
      // 👇️ clear timeout when the component unmounts
      clearTimeout(timeoutID);
    }
  }, [secondsAmount])

  const minutes = Math.floor(secondsAmount / 60)
  const second = secondsAmount % 60

  return (
    <div>
      <span>{String(minutes).padStart(2, '0')}</span>
      <span>:</span>
      <span>{String(second).padStart(2, '0')}</span>
    </div>
  )
}

export default App
