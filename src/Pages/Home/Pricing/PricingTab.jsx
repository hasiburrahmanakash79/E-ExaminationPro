import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { FaCircleCheck } from 'react-icons/fa6'
import { MdCancel } from 'react-icons/md'
import { Link } from 'react-router-dom'
// import usePrice from '../../../Hooks/usePrice/usePrice'

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}
const PricingTab = ({pricePackage}) => {
  // const [pricePackage] = usePrice()
  const [selectedTab, setSelectedTab] = useState(0)
  const defaultTab = pricePackage.findIndex(price => price.name === 'Premium')
  return (
    <div className=' min-w-[85vw] md:hidden'>
      <Tab.Group defaultIndex={defaultTab}>
        <Tab.List className='flex p-1 space-x-1 min-w-9/12 max-w-96 rounded-xl bg-blue-900/20'>
          {pricePackage.map(price => (
            <Tab
              key={price.id}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
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
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <div className='flex flex-col px-4 divide-y divide-blue-400 h-fit'>
                <div>
                  <p className='my-2 text-xl font-bold text-yellow-400 '>
                    {price.name} Package
                  </p>
                  <h3 className='py-4 text-xl text-accent'>
                    ${price.packageAmount}
                  </h3>
                </div>
                {price.features.map((feature, index) => (
                  <p
                    key={index}
                    className='inline-flex items-center justify-center py-4 text-black uppercase text-start'
                  >
                    {feature.name}
                    {feature.available ? (
                      <FaCircleCheck className='ml-2 text-center text-accent' />
                    ) : (
                      <MdCancel className='ml-2 text-lg text-center text-red-500' />
                    )}
                  </p>
                ))}
              </div>
              <div className='py-4 '>
                <Link
                  to={`/payment/${price?.id}`}
                  className={`btn ${
                    price.name === 'Premium' ? 'btn-info' : 'btn-primary'
                  }`}
                >
                  Start by Signing Up!
                </Link>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default PricingTab
