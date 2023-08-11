import Achievement from "../Achievement/Achievement";
import Banner from "../Banner/Banner";
import DemoTest from "../DemoTest/DemoTest";
import Testimonial from "../Testimonial/Testimonial";
import TopSubjects from "../TopSubjects/TopSubjects";

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <DemoTest/>
            <TopSubjects />
            <Achievement />
            <Testimonial />
        </div>
    );
};

export default HomePage;