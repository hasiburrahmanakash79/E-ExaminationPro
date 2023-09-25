import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { useLocation } from 'react-router-dom'
import CheckOutForm from './CheckOutForm'
import PaymentCard from './PaymentCard'
import usePrice from '../../../../Hooks/usePrice/usePrice'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure.jsx/useAxiosSecure'
import { AuthContext } from '../../../../Provider/AuthProvider'
import { useQuery } from '@tanstack/react-query'

// TODO
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_key)

const Payment = () => {
  // const [subjects] = useSubject()
  const [pricePackage] = usePrice()
  // const { id } = useParams()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const id = searchParams.get('Cardid')
  // console.log(id, '-----------------------------------------------21');

  const [axiosSecure] = useAxiosSecure()

  const { data: priceData, isLoading } = useQuery({
    queryKey: ['priceData', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/price?id=${id}`)
      //console.log(res.data);
      return res.data
    }
  })
  //console.log(priceData?.packageAmount, '..............................................................37')

  const packages = pricePackage.filter(price => price.id == id)
  const price = priceData?.packageAmount
  //console.log(price);
  return (
    <div>
      {priceData ? (
        <div className='p-5 mt-5'>
          {/* <Helmet><title>E-ExamPro | Payment </title></Helmet> */}
          <div className='flex flex-col p-12 mx-auto  shadow-md  border-2  lg:w-5/12 md:w-8/12 lg:mt-32 lg:mb-16 rounded-3xl'>
            <div className='hidden mx-auto lg:-mt-32 md:-mt-16 md:block'>
              <PaymentCard />
            </div>
            <h1 className='m-10 text-3xl text-center'>Payment</h1>

            <Elements stripe={stripePromise}>
              <CheckOutForm price={price} packages={packages}></CheckOutForm>
            </Elements>
          </div>
        </div>
      ) : (
        <>
          <h1>Loading............</h1>
        </>
      )}
    </div>
  )
}

export default Payment
