import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Testimonial.css";
import { EffectCoverflow, Pagination } from "swiper/modules";

import quote from "../../../assets/quote.png";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://e-exam-pro-server.vercel.app/testimonials"
        );
        const data = await response.json();

        console.log(data);
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="mx-5 pb-5 ">
      <h1 className="text-center text-slate-200 text-4xl font-bold  mt-5">
        What Our Users Say
      </h1>
      <div
        className="bg-gradient-to-tr from-[#0B0728] to-[#491A66] py-10 mt-6 rounded-lg"
        style={{
          background:
            "linear-gradient(45deg,rgb(17, 9, 83), rgb(54, 2, 102), rgb(4, 64, 114), rgb(73, 1, 114))",
        }}
      >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
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
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
              <div className="relative w-full md:px-8 md:pb-12 md:pt-8 py-7 px-5 ">
                <img
                  src={quote}
                  alt=""
                  className="w-14 h-14 absolute  md:top-6 top-5 md:right-8 right-6 opacity-20 "
                />
                <p className="mt-10 text-slate-800">
                  {testimonial.feedback_message}
                </p>
                <div className="flex items-center gap-4 pt-3">
                  <div className="avatar">
                    <div className="w-24 mask mask-hexagon-2">
                      <img src={testimonial.image} />
                    </div>
                  </div>
                  {/* <div className="w-20">
                    <img
                      className=" border-2 "
                      src={testimonial.image}
                    />
                  </div> */}
                  <div className="pl-1 pt-2">
                    <h2 className="text-xl font-medium text-slate-900 leading-5">
                      {testimonial.student_name} <br />{" "}
                    </h2>
                    <div className="rating pt-2">
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
  );
};

export default Testimonial;
