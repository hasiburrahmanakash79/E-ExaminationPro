import { FaCircleCheck } from 'react-icons/fa6'
import { MdCancel } from 'react-icons/md'
import { Helmet } from 'react-helmet-async'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../Provider/AuthProvider'

const PaymentHistory = () => {
  const [paymentInfo, setPaymentInfo] = useState([])
  const { user } = useContext(AuthContext)

  useEffect(() => {
    fetch(`http://localhost:3500/history/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setPaymentInfo(data)
        console.log(data);
      })
  }, [])
  return (
    <div>
      <Helmet>
        <title>Payment History | E-ExamPro </title>
      </Helmet>
      <h1 className='my-5 text-2xl text-center md:text-4xl'>
        Your Payment history
      </h1>

      <div className='flex items-center justify-center gap-5 py-20'>
        {paymentInfo.map(price => (
          <div className='pb-3 mt-5 space-y-4 text-center border rounded-lg shadow-md md:block w-72 primary-bg hover:outline-blue-400 hover:outline translate'>
            <p className='my-2 text-lg font-bold text-primary'>
              {price.packageName}
            </p>
            <h3 className='text-xl'>${price.price}</h3>

            {/* <ul className='flex flex-col divide-y divide-base-200 divider'> */}
            <div className='flex flex-col divider divide-purple-950 h-fit'>
              {price.features?.map((feature, index) => (
                <p
                  key={index}
                  className='inline-flex items-center justify-center uppercase text-start'
                >
                  {feature.name}
                  {feature.available ? (
                    <FaCircleCheck className='ml-2 text-center ' />
                  ) : (
                    <MdCancel className='ml-2 text-lg text-center text-red-500' />
                  )}
                </p>
              ))}
            </div>
            <h1>---Paid---</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PaymentHistory
