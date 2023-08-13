import Banner from "../Banner/Banner";
import DemoTest from "../DemoTest/DemoTest";
import Faq from "../Faq/Faq";
import Testimonial from "../Testimonial/Testimonial";
import TopSubjects from "../TopSubjects/TopSubjects";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <DemoTest />
            <TopSubjects />
            {/* <Achievement /> */}
            <Testimonial />
            <Faq></Faq>
        </div>
    );
};

export default HomePage;