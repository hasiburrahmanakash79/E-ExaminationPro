import React from 'react'
import {
  resetResult,
  setView
} from '../../redux/features/examPage/examPageSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const StartCountdowns = ({ countdown, setCountdown }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    const countdownTimer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(prevCountdown => prevCountdown - 1) /// function for 3 sec countdown before start exam

        dispatch(setView(false))
        dispatch(resetResult())
      } else {
        clearInterval(countdownTimer)
      }
    }, 1000)
    return () => clearInterval(countdownTimer)
  }, [countdown])
  return (
    <div className=' h-[80vh] flex flex-col justify-center items-center '>
      <div className='text-center '>
        <h1 className='my-1 font-bold text-red-600 text-9xl'>{countdown}</h1>
        <h1 className='text-7xl'>Get Ready</h1>
      </div>
    </div>
  )
}

export default StartCountdowns
