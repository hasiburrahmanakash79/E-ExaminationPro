import { Hourglass } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] gap-6">
      <div>
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#4098A0", "#fcba03"]}
        />
        <h2 className="text-sm text-center">E-Exam Pro.... </h2>
      </div>
    </div>
  );
};

export default Loading;
