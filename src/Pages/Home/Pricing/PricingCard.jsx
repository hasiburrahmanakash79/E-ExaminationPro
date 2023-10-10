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
      behavior: 'smooth'
    })
  }

  return (
    <div
      className={`hidden md:block w-72  p-3 mx-auto space-y-4 text-center hover:transition-all border rounded-lg shadow-md bg-secondary text-white ${
        price.name === 'Premium'
          ? 'scale-110 hover:scale-105  '
          : 'hover:scale-105'
      }
       hover:outline-blue-400 hover:outline translate hover:z-10 `}
    >
      <p className='my-2 text-lg font-bold'>{price.name}</p>
      <h3 className='text-xl'>${price.packageAmount}</h3>
      <div className='flex flex-col divider divide-purple-950 h-fit'>
        {price.features?.map((feature, index) => (
          <p
            key={index}
            className='inline-flex items-center justify-center ml-2 uppercase text-start'
          >
            {feature.name}
            {feature.available ? (
              <FaCircleCheck className='ml-2 text-center text-primary' />
            ) : (
              <MdCancel className='ml-2 text-lg text-center text-red-500' />
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
            className='btn-primary btn hover:outline'
          >
            {user ? 'Enjoy your free package' : 'Start by signing up'}
          </Link>
        ) : (
          <Link
            to={`/paymentOption/${price?._id}`}
            className={` btn ${
              price.name === 'Premium' ? 'btn-info' : 'btn-primary'
            }
       hover:outline-blue-400 hover:outline translate `}
          >
            {price.name === 'Premium' && 'Buy Premium Package'}{' '}
            {price.name === 'Ultimate' && 'Buy Ultimate Package'}
          </Link>
        )}
      </div>
    </div>
  )
}

export default PricingCard
