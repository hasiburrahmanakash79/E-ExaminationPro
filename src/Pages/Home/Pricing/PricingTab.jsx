import { useContext, useState } from 'react'
import { Tab } from '@headlessui/react'
import { FaCircleCheck } from 'react-icons/fa6'
import { MdCancel } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../Provider/AuthProvider'
import usePrice from '../../../Hooks/usePrice/usePrice'

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}
const PricingTab = () => {
  const [pricePackage] = usePrice()
  const { user } = useContext(AuthContext)
  const [selectedTab, setSelectedTab] = useState(0)
  const defaultTab = pricePackage.findIndex(price => price.name === 'Premium')

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className=' min-w-[85vw] md:hidden'>
      <Tab.Group defaultIndex={defaultTab}>
        <Tab.List className='flex p-1 space-x-1 min-w-9/12 max-w-96 rounded-xl'>
          {pricePackage.map(price => (
            <Tab
              key={price.id}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 ',
                  'focus:outline-none border focus:ring-2',
                  selected ? 'shadow-md border-2' : ' '
                )
              }
              onClick={() => setSelectedTab(price.id)}
            >
              {price.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          {pricePackage.map(price => (
            <Tab.Panel
              key={price.id}
              className={classNames(
                'rounded-xl  p-3',
                'border rounded focus:outline-none focus:ring-2'
              )}
            >
              <div className='flex flex-col px-4 divide-y divide-primary h-fit'>
                <div>
                  <p className='my-2 text-xl font-bold '>
                    {price.name} Package
                  </p>
                  <h3 className='py-4 text-2xl font-bold text-primary'>
                    ${price.packageAmount}
                  </h3>
                </div>
                {price.features.map((feature, index) => (
                  <p
                    key={index}
                    className='inline-flex items-center justify-center py-4 uppercase text-start'
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
              <div className='py-4 '>
                {price.name === 'Free' ? (
                  <Link
                    onClick={user?.email && scrollToTop}
                    to={!user?.email && '/login'}
                    className='btn-primary btn hover:outline-blue-400 hover:outline translate'
                  >
                    {user ? 'Enjoy your free package' : 'Start by signing up'}
                  </Link>
                ) : (
                  <Link
                    to={`/paymentOption/${price?._id}`}
                    className={` btn ${
                      price.name === 'Premium' ? 'btn-info' : 'btn-primary'
                    } hover:outline-blue-400 hover:outline translate `}
                  >
                    {price.name === 'Premium' && 'Buy Premium Package'}{' '}
                    {price.name === 'Ultimate' && 'Buy Ultimate Package'}
                  </Link>
                )}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default PricingTab
