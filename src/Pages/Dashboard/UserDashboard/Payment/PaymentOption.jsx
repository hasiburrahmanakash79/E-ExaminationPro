import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import usePrice from '../../../../Hooks/usePrice/usePrice'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'SSL Commerz Payment'
  },
  {
    name: 'Stripe Payment ',
  }
]

export default function PaymentOption() {
    const [pricePackage] = usePrice()
  const [selected, setSelected] = useState(plans[0])

  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <h1 className='text-3xl font-bold text-amber-700 text-center md:mb-10 mb-5'>Choose payment method</h1>
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-600'
                      : ''
                  }
                  ${
                    checked ? 'bg-sky-500 bg-opacity-75 text-white' : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-lg">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-500'
                            }`}
                          >
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        <Link to={`/payment/`}><button className='btn w-full btn-warning mt-10'>Go to Payment Process</button></Link>
        </RadioGroup>
      </div>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
