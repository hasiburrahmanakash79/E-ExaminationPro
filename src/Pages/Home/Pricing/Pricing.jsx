import Loading from '../../../Components/Loading/Loading'
import usePrice from '../../../Hooks/usePrice/usePrice'
import PricingCard from './PricingCard'
import PricingTab from './PricingTab'

const Pricing = () => {
  const [pricePackage, loading] = usePrice()

  if (loading) {
    return <Loading />
  }

  return (
    <section className='w-full mx-auto my-16 space-y-3 text-center md:my-28'>
      <h5
        data-aos='zoom-in-down'
        data-aos-duration='500'
        className='my-4 text-xl'
      >
        Exam Facility Packages
      </h5>
      <h1
        data-aos='zoom-in-down'
        data-aos-duration='800'
        className='pt-3 pb-6 text-2xl font-bold'
      >
        Meet our pricing plan that suit you
      </h1>
      <div
        data-aos='zoom-in'
        data-aos-duration='1000'
        className='grid grid-cols-1 gap-1 pt-6 mx-auto md:grid-cols-3 w-fit'
      >
        {pricePackage.map(price => (
          <PricingCard price={price} key={price.id} />
          // <SSLCart price={price} key={price.id} />
        ))}
        <PricingTab pricePackage={pricePackage} />
      </div>
    </section>
  )
}

export default Pricing
