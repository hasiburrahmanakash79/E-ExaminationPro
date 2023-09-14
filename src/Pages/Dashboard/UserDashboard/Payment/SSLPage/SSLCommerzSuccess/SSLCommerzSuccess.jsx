import { useParams } from "react-router-dom";

const SSLCommerzSuccess = () => {
    const { tranId } = useParams();
    console.log(tranId);
    return (
        <div className="py-12 text-center">
            <h2>Your Payment Success: <span className="text-orange-500">{tranId}</span> </h2>
        </div>
    );
};

export default SSLCommerzSuccess;