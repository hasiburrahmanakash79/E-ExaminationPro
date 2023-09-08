import React from 'react'
import { strict_output } from './gpt'

const Quiz = async () => {
  const question = await strict_output()
  return <div>Quiz</div>
}

export default Quiz
