import { useEffect, useState } from 'react'
import PricingCard from './PricingCard'
import PricingTab from './PricingTab'

const Pricing = () => {
  const [pricePackage, setPricePackage] = useState([])
  useEffect(() =>{
    fetch('../../../../public/pricing.json')
    .then(res => res.json())
    .then((data) => {
      setPricePackage(data);
    })
  },[])

  return (
    <section className='w-full min-h-screen mx-auto space-y-3 text-center '>
      <h5 className='my-4 text-xl text-orange-400'>Exam Facility Packages</h5>
      <h1 className='py-4 text-2xl font-bold'>
        Meet our pricing plan that suit you
      </h1>
      <div className='grid grid-cols-1 gap-1 pt-3 mx-auto md:grid-cols-3 w-fit'>
        {pricePackage.map(price => (
          <PricingCard price={price} key={price.id} />
        ))}
        <PricingTab pricePackage={pricePackage} />
      </div>
    </section>
  )
}

export default Pricing
