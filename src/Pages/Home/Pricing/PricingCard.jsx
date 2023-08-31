import { FaCircleCheck } from 'react-icons/fa6'
import { MdCancel } from 'react-icons/md'
import { Link } from 'react-router-dom'
const PricingCard = ({ price }) => {
  console.log(price)
  return (
    <div
      className={`hidden md:block px-4 w-72  pb-3 mx-auto space-y-4 text-center transition-all border rounded-lg shadow-2xl primary-bg border-slate-200 ${
        price.name === 'Premium'
          ? 'scale-110 hover:scale-110 '
          : 'hover:scale-105'
      }
       hover:outline-blue-400 hover:outline translate hover:z-10 `}
    >
      <p className='my-2 text-lg font-bold text-yellow-400'>{price.name}</p>
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
              <FaCircleCheck className='ml-2 text-center text-slate-50' />
            ) : (
              <MdCancel className='ml-2 text-lg text-center text-red-500' />
            )}
          </p>
        ))}
      </div>
      {/* </ul> */}
      <div className='pt-4 '>
        <Link
          to='/'
          className={` btn ${
            price.name === 'Premium' ? 'btn-info' : 'btn-primary'
          }
       hover:outline-blue-400 hover:outline translate `}
        >
          {' '}
          Start by Signing Up!
        </Link>
      </div>
    </div>
  )
}

export default PricingCard
