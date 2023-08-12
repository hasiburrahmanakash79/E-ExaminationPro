import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Testimonial.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import quote from "../../../assets/quote.png";
import user from "../../../assets/user_img.png";

const Testimonial = () => {
    return (
        <div className='mx-5 pb-5 ' >
      <h1 className="text-center text-slate-200 text-4xl font-bold  mt-5">What Our Users Say</h1>
            <div className='bg-gradient-to-tr from-[#0B0728] to-[#491A66] py-10 mt-6 rounded-lg' style={{background:'linear-gradient(45deg,rgb(17, 9, 83), rgb(54, 2, 102), rgb(4, 64, 114), rgb(73, 1, 114))'}} >
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
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative w-full md:px-8 md:pb-12 md:pt-8 py-7 px-5'>
                        <img src={quote} alt="" className='w-14 h-14 absolute md:top-6 top-5 md:right-8 right-6 opacity-20 ' />
                        <p className='mt-10 text-slate-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi eum voluptas maxime omnis! Quis necessitatibus sunt laboriosam magnam iure alias magni adipisci qui ipsum?</p>
                        <div className='flex items-center gap-4 pt-3'>
                            <div className='w-20 h-20 object-cover '>
                                <img className="mask mask-hexagon-2 border-2 " src={user}/>
                            </div>
                            <div className='pl-1 pt-2'>
                                <h2 className='text-xl font-medium text-slate-900 leading-5'>Saiful Arafat <br /> <span className='text-sm font-normal text-slate-500'>Web Developer</span></h2>
                                <div className="rating pt-2">
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked />
                                    <span className='pl-2 text-lg text-slate-500 font-medium font-sans'>(5)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full md:px-8 md:pb-12 md:pt-8 py-7 px-5 '>
                        <img src={quote} alt="" className='w-14 h-14 absolute  md:top-6 top-5 md:right-8 right-6 opacity-20 ' />
                        <p className='mt-10 text-slate-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi eum voluptas maxime omnis! Quis necessitatibus sunt laboriosam magnam iure alias magni adipisci qui ipsum?</p>
                        <div className='flex items-center gap-4 pt-3'>
                            <div className='w-20 h-20 object-cover '>
                                <img className="mask mask-hexagon-2 border-2 " src={user}/>
                            </div>
                            <div className='pl-1 pt-2'>
                                <h2 className='text-xl font-medium text-slate-900 leading-5'>Saiful Arafat <br /> <span className='text-sm font-normal text-slate-500'>Web Developer</span></h2>
                                <div className="rating pt-2">
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                                    <span className='pl-2 text-lg text-slate-500 font-medium font-sans'>(4.3)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full md:px-8 md:pb-12 md:pt-8 py-7 px-5'>
                        <img src={quote} alt="" className='w-14 h-14 absolute  md:top-6 top-5 md:right-8 right-6 opacity-20 ' />
                        <p className='mt-10 text-slate-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi eum voluptas maxime omnis! Quis necessitatibus sunt laboriosam magnam iure alias magni adipisci qui ipsum?</p>
                        <div className='flex items-center gap-4 pt-3'>
                            <div className='w-20 h-20 object-cover '>
                                <img className="mask mask-hexagon-2 border-2 " src={user}/>
                            </div>
                            <div className='pl-1 pt-2'>
                                <h2 className='text-xl font-medium text-slate-900 leading-5'>Saiful Arafat <br /> <span className='text-sm font-normal text-slate-500'>Web Developer</span></h2>
                                <div className="rating pt-2">
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked />
                                    <span className='pl-2 text-lg text-slate-500 font-medium font-sans'>(5)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full md:px-8 md:pb-12 md:pt-8 py-7 px-5'>
                        <img src={quote} alt="" className='w-14 h-14 absolute  md:top-6 top-5 md:right-8 right-6 opacity-20 ' />
                        <p className='mt-10 text-slate-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi eum voluptas maxime omnis! Quis necessitatibus sunt laboriosam magnam iure alias magni adipisci qui ipsum?</p>
                        <div className='flex items-center gap-4 pt-3'>
                            <div className='w-20 h-20 object-cover '>
                                <img className="mask mask-hexagon-2 border-2 " src={user}/>
                            </div>
                            <div className='pl-1 pt-2'>
                                <h2 className='text-xl font-medium text-slate-900 leading-5'>Saiful Arafat <br /> <span className='text-sm font-normal text-slate-500'>Web Developer</span></h2>
                                <div className="rating pt-2">
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500"  />
                                    <span className='pl-2 text-lg text-slate-500 font-medium font-sans'>(4)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full md:px-8 md:pb-12 md:pt-8 py-7 px-5'>
                        <img src={quote} alt="" className='w-14 h-14 absolute  md:top-6 top-5 md:right-8 right-6 opacity-20 ' />
                        <p className='mt-10 text-slate-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi eum voluptas maxime omnis! Quis necessitatibus sunt laboriosam magnam iure alias magni adipisci qui ipsum?</p>
                        <div className='flex items-center gap-4 pt-3'>
                            <div className='w-20 h-20 object-cover '>
                                <img className="mask mask-hexagon-2 border-2 " src={user}/>
                            </div>
                            <div className='pl-1 pt-2'>
                                <h2 className='text-xl font-medium text-slate-900 leading-5'>Saiful Arafat <br /> <span className='text-sm font-normal text-slate-500'>Web Developer</span></h2>
                                <div className="rating pt-2">
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500"  />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500"  />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500"  />
                                    <span className='pl-2 text-lg text-slate-500 font-medium font-sans'>(5)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full md:px-8 md:pb-12 md:pt-8 py-7 px-5'>
                        <img src={quote} alt="" className='w-14 h-14 absolute  md:top-6 top-5 md:right-8 right-6 opacity-20 ' />
                        <p className='mt-10 text-slate-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi eum voluptas maxime omnis! Quis necessitatibus sunt laboriosam magnam iure alias magni adipisci qui ipsum?</p>
                        <div className='flex items-center gap-4 pt-3'>
                            <div className='w-20 h-20 object-cover '>
                                <img className="mask mask-hexagon-2 border-2 " src={user}/>
                            </div>
                            <div className='pl-1 pt-2'>
                                <h2 className='text-xl font-medium text-slate-900 leading-5'>Saiful Arafat <br /> <span className='text-sm font-normal text-slate-500'>Web Developer</span></h2>
                                <div className="rating pt-2">
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked />
                                    <span className='pl-2 text-lg text-slate-500 font-medium font-sans'>(5)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;