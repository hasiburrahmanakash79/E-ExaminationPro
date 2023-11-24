import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import achievementLottie from "../../../assets/animationFile/achievement.json"
const Achievement = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="md:my-16 my-10">
      <h1
        className="text-center text-4xl font-bold py-10"
      >
        Our Achievement
      </h1>
      <div className=" mt-6 px-10 gap-10 grid md:grid-cols-5 items-end rounded-xl  primary-bg text-center md:text-left">
        <div className="px-5 md:px-0 col-span-2 ">
          <div>
            <h2 className="text-3xl font-bold my-5">Our Best Achievement</h2>
            <p className="md:mb-20 ">
              E-ExamPro has achieved significant milestones, revolutionizing online education. With a user-friendly platform and innovative features, it's empowered countless learners to excel in their exams and educational pursuits.
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

        <div className="col-span-3">
          <Lottie
            animationData={achievementLottie}
            loop={true} className="" />
        </div>
      </div>
    </section>
  );
};

export default Achievement;
