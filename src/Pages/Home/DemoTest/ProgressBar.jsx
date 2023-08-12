import { Line } from 'rc-progress'
import React from 'react'
import './demoTest.css'
const ProgressBar = ({ percent }) => {
  return <Line percent={percent} strokeWidth='2' className='progressBar' />
}

export default ProgressBar
