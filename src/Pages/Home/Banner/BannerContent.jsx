import { Link } from "react-router-dom";

const BannerContent = () => {
    return (
        <div className="text-center">
            <h4
                data-aos="fade-left"
                data-aos-duration="1900"
                className="mb-2 text-lg text-center text-white md:mb-6 md:text-3xl">
                Get Ready For The Battle Of Examination
            </h4>
            <h4
                data-aos="fade-up"
                data-aos-duration="2200"
                className="text-sm text-white md:mb-6 md:text-xl">
                with
            </h4>

            <h1
                data-aos="fade-right"
                data-aos-duration="2500"
                className="text-2xl font-semibold text-white md:mb-10 md:text-7xl">E-ExamPro</h1>

            <Link to="/allSubjects">
                <button
                    data-aos="fade-down-right"
                    data-aos-duration="3000"
                    className="mt-4 rounded-full md:mt-6 md:text-lg btn-sm md:btn-md primary-btn">
                    Explore Exams
                </button>
            </Link>
        </div>
    );
};

export default BannerContent;