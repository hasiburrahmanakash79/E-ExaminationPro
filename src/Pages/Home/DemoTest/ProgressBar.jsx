/* eslint-disable react/prop-types */
import { Line } from 'rc-progress'

import './demoTest.css'
const ProgressBar = ({ percent }) => {
  return <Line percent={percent} strokeWidth='2' className='progressBar' />
}

export default ProgressBar
