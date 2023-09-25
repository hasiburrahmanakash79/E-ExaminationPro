import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import './Testimonial.css'
import { FreeMode, Pagination } from 'swiper/modules';

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
          'http://localhost:4000/testimonials'
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
    <div className='p-5 mb-7'>
      <Swiper
       freeMode={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024:{
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1270: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode,Pagination]}
        className="mySwiper"
      >
        {
          testimonials?.map((testimonial, index) => <SwiperSlide key={index}>

            <div className="shadow-xl border card w-96 h-80 mb-7">
              <figure className="pt-5 pb-2">
              <img className='mx-auto' style={{ height: '100px', width: '100px', objectFit: 'cover', borderRadius: '50%' }} src={testimonial.image} />
              </figure>
              <div className="items-center px-10 text-center ">
            

                <p className='mb-2 text-xl'> {testimonial.student_name}</p>
                <p className='text-sm'> {testimonial.feedback_message}</p>
                <div className="flex justify-center mb-5">
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={testimonial.rating}
                    readOnly
                  />
                </div>
              </div>
            </div>

          </SwiperSlide>)
        }


      </Swiper>
    </div>
  )
}

export default Testimonial
