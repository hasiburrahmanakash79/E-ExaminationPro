import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import './Testimonial.css'
import { EffectCoverflow, Pagination } from 'swiper/modules'

import quote from '../../../assets/quote.png'
import { useEffect, useState } from 'react'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://e-exam-pro-server.vercel.app/testimonials'
        )
        const data = await response.json()

        // //console.log(data);
        setTestimonials(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  return (
    <div className='py-16 md:mt-24'>
      <div className='primary-bg rounded-xl'>
        <h1 className='py-8 text-2xl font-bold text-center md:text-4xl '>
          What Our Users Say
        </h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className='mySwiper'
        >
          {testimonials.map(testimonial => (
            <SwiperSlide key={testimonial._id}>
              <div className='relative w-full pb-5 md:px-8 md:pb-12 md:pt-8 '>
                <img
                  src={quote}
                  alt=''
                  className='absolute w-14 h-14 md:top-6 top-5 md:right-8 right-6 opacity-20 '
                />
                <p className='h-40 mt-10 text-slate-800'>
                  {testimonial.feedback_message}
                </p>
                <div className='flex items-center gap-4 pt-3'>
                  <div className='avatar'>
                    <div className='w-24 mask mask-hexagon-2'>
                      <img src={testimonial.image} />
                    </div>
                  </div>
                  <div className='pt-2 pl-1'>
                    <h2 className='text-xl font-medium leading-5 text-slate-900'>
                      {testimonial.student_name} <br />{' '}
                    </h2>
                    <div className='pt-2 rating'>
                      <Rating
                        style={{ maxWidth: 180 }}
                        value={testimonial.rating}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonial
