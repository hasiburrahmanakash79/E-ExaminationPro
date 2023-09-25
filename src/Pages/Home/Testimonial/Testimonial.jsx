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
    // <div className='pb-5 mx-5 mt-16 md:mt-28'>
    //   <h1
    //     data-aos='zoom-in-down'
    //     data-aos-duration='800'
    //     className='mt-5 text-4xl font-bold text-center '
    //   >
    //     What Our Users Say
    //   </h1>
    //   <div
    //     data-aos='zoom-in'
    //     data-aos-easing='ease-out-cubic'
    //     data-aos-duration='2000'
    //     className='bg-gradient-to-tr overflow-hidden from-[#0B0728] to-[#491A66] my-16 mt-6 rounded-lg'
    //     style={{
    //       background:
    //         'linear-gradient(45deg,rgb(17, 9, 83), rgb(54, 2, 102), rgb(4, 64, 114), rgb(73, 1, 114))'
    //     }}
    //   >
    //     <Swiper
    //       effect={'coverflow'}
    //       grabCursor={true}
    //       centeredSlides={true}
    //       slidesPerView={'auto'}
    //       coverflowEffect={{
    //         rotate: 0,
    //         stretch: 0,
    //         depth: 100,
    //         modifier: 2,
    //         slideShadows: true
    //       }}
    //       pagination={true}
    //       modules={[EffectCoverflow, Pagination]}
    //       className='mySwiper'
    //     >
    //       {testimonials.map(testimonial => (
    //         <SwiperSlide key={testimonial._id}>
    //           <div className='relative w-full px-5 md:px-8 md:pb-12 md:pt-8 py-7 '>
    //             <img
    //               src={quote}
    //               alt=''
    //               className='absolute w-14 h-14 md:top-6 top-5 md:right-8 right-6 opacity-20 '
    //             />
    //             <p className='h-40 mt-10 '>
    //               {testimonial.feedback_message}
    //             </p>
    //             <div className='flex items-center gap-4 pt-3'>
    //               <div className='avatar'>
    //                 <div className='w-24 mask mask-hexagon-2'>
    //                   <img src={testimonial.image} />
    //                 </div>
    //               </div>
    //               <div className='pt-2 pl-1'>
    //                 <h2 className='text-xl font-medium leading-5 aext-slate-900'>
    //                   {testimonial.student_name} <br />{' '}
    //                 </h2>
    //                 <div className='pt-2 rating'>
    //                   <Rating
    //                     style={{ maxWidth: 180 }}
    //                     value={testimonial.rating}
    //                     readOnly
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </SwiperSlide>
    //       ))}
    //     </Swiper>
    //   </div>
    // </div>


    <div className='pb-5 mb-5'>
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

            <div className="shadow-xl card w-96 h-80 mb-7">
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
