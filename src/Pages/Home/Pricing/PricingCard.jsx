import { useContext } from 'react'
import { FaCircleCheck } from 'react-icons/fa6'
import { MdCancel } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../Provider/AuthProvider'
const PricingCard = ({ price }) => {
  const { user } = useContext(AuthContext)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This smoothens the scroll animation
    })
  }
  // //console.log(price)
  return (
    <div
      className={`hidden md:block w-72  pb-3 mx-auto space-y-4 text-center transition-all border rounded-lg shadow-md primary-bg   ${
        price.name === 'Premium'
          ? 'scale-110 hover:scale-110 '
          : 'hover:scale-105'
      }
       hover:outline-blue-400 hover:outline translate hover:z-10 `}
    >
      <p className='my-2 text-lg font-bold'>{price.name}</p>
      <h3 className='text-xl'>${price.packageAmount}</h3>

      {/* <ul className='flex flex-col divide-y divide-base-200 divider'> */}
      <div className='flex flex-col divider divide-purple-950 h-fit'>
        {price.features?.map((feature, index) => (
          <p
            key={index}
            className='inline-flex items-center justify-center uppercase text-start'
          >
            {feature.name}
            {feature.available ? (
              <FaCircleCheck className='ml-2 text-center  aext-slate-50' />
            ) : (
              <MdCancel className='ml-2 text-lg text-center aext-red-500' />
            )}
          </p>
        ))}
      </div>
      {/* </ul> */}
      <div className='pt-4 '>
        {price.name === 'Free' ? (
          <Link
            onClick={user?.email && scrollToTop}
            to={!user?.email && '/login'}
            className='btn-primary btn hover:outline-blue-400 hover:outline translate'
          >
            {' '}
            Start by Signing Up!
          </Link>
        ) : (
          <Link
            to={`/paymentOption/${price?._id}`}
            className={` btn ${price.name === 'Premium' ? 'btn-info' : 'btn-accent'}
       hover:outline-blue-400 hover:outline translate `}
          >
            {' '}
            Start by Signing Up!
          </Link>
        )}
      </div>
    </div>
  )
}

export default PricingCard
