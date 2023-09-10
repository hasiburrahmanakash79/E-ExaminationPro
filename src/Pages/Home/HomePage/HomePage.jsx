import { useEffect, useState } from "react";
import examPic from "../../../assets/exam.jpg";
import Achievement from "../Achievement/Achievement";
import Banner from "../Banner/Banner";
import DemoTestSection from "../DemoTest/DemoTestSection";
import Faq from "../Faq/Faq";
import Testimonial from "../Testimonial/Testimonial";
import TopSubjects from "../TopSubjects/TopSubjects";
import Pricing from "../Pricing/Pricing";
import { Helmet } from "react-helmet-async";
import MainContact from "../../Contact/MainContact";
// import ShortcutKey from "../../../Components/ShortcutKey/ShortcutKey";
const HomePage = () => {
  console.log(window.localStorage.getItem("showMainContent"));
  const [showMainContent, setShowMainContent] = useState(
    window.localStorage.getItem("showMainContent") === null ? false : true
  );

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowMainContent(true);
      window.localStorage.setItem("showMainContent", "true");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (showMainContent) {
    const a = () => {
      window.scrollTo(0, 0);
    };
    a();
  }
  console.log(window.scrollY);
  console.log(showMainContent);

  return (
    <div className="">
      <Helmet>
        <title>E-ExamPro </title>
      </Helmet>
      <div
        className={`hero min-h-[100vh]  transition-all duration-700 ${
          showMainContent ? "  opacity-0 hidden" : "opacity-100 "
        }`}
        style={{ backgroundImage: `url(${examPic})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-6xl font-bold text-white">
              Welcome to E-ExamPro
            </h1>
            <p className="mb-5 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>

      <div
        className={`transition-opacity duration-700 ${
          showMainContent ? "  opacity-100" : "opacity-0"
        } primary-bg2 `}
      >
        <Banner />
        <div className="container mx-auto px-5">
          <DemoTestSection />
          <TopSubjects />
          <Achievement />
          <MainContact />
          <Pricing />
          <Faq />
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
