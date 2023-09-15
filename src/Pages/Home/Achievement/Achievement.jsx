import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const Achievement = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="my-16">
      <h1
        data-aos="zoom-in-down"
        data-aos-duration="800"
        className="text-center text-4xl font-bold pt-10"
      >
        Our Achievement
      </h1>
      <div className=" mt-6 px-10 py-20 gap-20 md:flex justify-evenly md:mt-10 items-end rounded-xl  primary-bg text-center md:text-left">
        <div className="px-5 md:px-0 full md:w-1/2 ">
          <div>
            <h2 className="text-xl text-orange-500">Why Ours</h2>
            <h2 className="text-3xl font-bold my-5">Our Best Achivements</h2>
            <p className="md:mb-20 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              repellendus aliquid dolorem minima. Quas, aperiam nemo maxime
              error dolorum perspiciatis exercitationem pariatur, quo optio
              dolor odit ipsam repellat possimus laborum?
            </p>
          </div>
          <div className="md:flex gap-20 md:pb-5">
            <div>
              <div className="text-[40px]">
                {inView ? (
                  <CountUp
                    className="font-bold"
                    start={0}
                    end={105}
                    duration={4}
                  />
                ) : null}
              </div>
              <div className="font-primary text-sm tracking-[2px]">
                University Scholars
              </div>
            </div>

            <div>
              <div className="text-[42px]">
                {inView ? (
                  <CountUp
                    className="font-bold"
                    start={0}
                    end={50}
                    duration={4}
                  />
                ) : null}
                +
              </div>
              <div className="font-primary text-sm tracking-[2px]">
                Professional Educators
              </div>
            </div>

            <div>
              <div className="text-[40px] ">
                {inView ? (
                  <CountUp
                    className="font-bold"
                    start={50}
                    end={100}
                    duration={4}
                  />
                ) : null}
                +
              </div>
              <div className="font-primary text-sm tracking-[2px]">
                Worldwide Branches
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            className=" mt-5 md:mb-5 rounded-lg md:mt-[-450px] w-[600px]"
            src="https://images.unsplash.com/photo-1590649942161-2e7eb2032934?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Achievement;
