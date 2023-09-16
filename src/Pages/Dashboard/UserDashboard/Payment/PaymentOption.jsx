import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const PaymentOption = () => {
  const { id } = useParams()
  //console.log(id)

  useEffect(() => {}, [])

  const [selectedOption, setSelectedOption] = useState('sslPayment')

  // Event handler to update the selected radio option
  const handleOptionChange = event => {
    setSelectedOption(event.target.value)
  }

  return (
    <>
      <h1 className='text-center text-3xl mt-6 '>Choose Your Payment Option</h1>
      <div className='flex flex-col items-center'>
        <div className='grid grid-cols-2  md:w-[400px] rounded-lg mt-4 bg-orange-500 p-10'>
          <h1>SSL Payment System</h1>
          <input
            type='radio'
            name='radio-2'
            className='radio radio-primary  ms-auto'
            value='sslPayment'
            checked={selectedOption === 'sslPayment'}
            onChange={handleOptionChange}
          />
        </div>
        <div className='grid grid-cols-2  bg-green-500 md:w-[400px] p-10 rounded-lg  mt-4 mb-10'>
          <h1>Strip Payment System</h1>
          <input
            type='radio'
            name='radio-2'
            className='radio radio-primary ms-auto'
            value='stripePayment'
            checked={selectedOption === 'stripePayment'}
            onChange={handleOptionChange}
          />
        </div>
        {/* <p>Selected Option: {selectedOption}</p> */}

        <Link to={`/${selectedOption}?Cardid=${id}`}>
          <button className='btn primary-btn'>Go to Payment Process</button>
        </Link>
      </div>
    </>
  )
}

export default PaymentOption
