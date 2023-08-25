import { ThreeCircles } from "react-loader-spinner";

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-[100vh] gap-6">
            <div>
                <ThreeCircles
                    height="100"
                    width="100"
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="three-circles-rotating"
                    outerCircleColor=""
                    innerCircleColor=""
                    middleCircleColor=""
                />
                <h2 className="text-center text-sm">Circle Loading</h2>
            </div>
        </div>
    );
};

export default Loading;