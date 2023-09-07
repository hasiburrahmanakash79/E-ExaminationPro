import { Link } from "react-router-dom";

const BannerContent = () => {
    return (
        <div className="text-center">
            <h4
                data-aos="fade-left"
                data-aos-duration="1900"
                className="mb-2 md:mb-6 text-lg md:text-3xl text-white text-center">
                Get Ready For The Battle Of Examination
            </h4>
            <h4
                data-aos="fade-up"
                data-aos-duration="2200"
                className="md:mb-6 text-sm md:text-xl text-white">
                with
            </h4>

            <h1
                data-aos="fade-right"
                data-aos-duration="2500"
                className="md:mb-10 font-semibold text-white text-2xl  md:text-7xl">E-ExamPro</h1>

            <Link to="/allSubjects">
                <button
                    data-aos="fade-down-right"
                    data-aos-duration="3000"
                    className="mt-4 md:mt-6 md:text-lg rounded-full btn-sm md:btn-md primary-btn">
                    Explore Exams
                </button>
            </Link>
        </div>
    );
};

export default BannerContent;