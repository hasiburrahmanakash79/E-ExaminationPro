import Lottie from "lottie-react";
import failedLottie from "../../../../../../assets/animationFile/failed.json"
const SSLCommerzFail = () => {

    return (
        <div className="md:w-1/2 mx-auto text-center py-12">
            <h2 className="text-sm text-red-500">Your Payment Fail </h2>
            <h2 className="text-lg text-white">Please try again Payment </h2>
            <Lottie
                animationData={failedLottie}
                loop={true} className="md:w-1/2 mx-auto md:h-72" />
        </div>
    );
};

export default SSLCommerzFail;