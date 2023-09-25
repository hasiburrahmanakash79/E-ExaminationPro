import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const PaymentOption = () => {
  const { id } = useParams()
  //console.log(id)

  useEffect(() => {}, [])

  const [selectedOption, setSelectedOption] = useState('sslPayment')

  // Event handler to update the selected radio option
  const handleOptionChange = event => {
    // console.log(event.target.value)
    setSelectedOption(event.target.value)
  }

  return (
    <>
      <h1 className='mt-6 text-3xl text-center '>Choose Your Payment Option</h1>
      <div className='flex flex-col items-center'>
        <label
          className={`cursor-pointer grid grid-cols-2  md:w-[400px] rounded-lg border   mt-4  p-10
          ${selectedOption === 'sslPayment' ? ' bg-primary' : 'bg-secondary'}
          `}
        >
          <h1>SSL Payment System</h1>
          <input
            type='radio'
            name='radio-2'
            className='radio radio-accent ms-auto'
            value='sslPayment'
            checked={selectedOption === 'sslPayment'}
            onChange={handleOptionChange}
          />
        </label>
        <label
          className={`cursor-pointer grid grid-cols-2 border
           md:w-[400px] p-10 rounded-lg  mt-4 mb-10
           ${
             selectedOption === 'stripePayment' ? ' bg-primary' : 'bg-secondary'
           }
           
           `}
        >
          <h1>Stripe Payment System</h1>
          <input
            type='radio'
            name='radio-2'
            className='radio radio-accent ms-auto'
            value='stripePayment'
            checked={selectedOption === 'stripePayment'}
            onChange={handleOptionChange}
          />
        </label>
        {/* <p>Selected Option: {selectedOption}</p> */}

        <Link to={`/${selectedOption}?Cardid=${id}`}>
          <button className='btn btn-primary'>Go to Payment Process</button>
        </Link>
      </div>
    </>
  )
}

export default PaymentOption
