import React from 'react'

const LongQuestion = () => {
  return (
    <section className='grid grid-cols-1 space-y-3 md:grid-cols-5 '>
      <h1 className='col-span-full'>Long Questions</h1>
      <div className='col-span-3'>{/* Text input box */}</div>
      <div className='hidden md:block md:col-span-2'>
        {/* sidebar accordion to show the answer */}
      </div>
    </section>
  )
}

export default LongQuestion
