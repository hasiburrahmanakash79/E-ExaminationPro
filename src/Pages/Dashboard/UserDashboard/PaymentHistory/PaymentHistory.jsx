import { FaCircleCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const PaymentHistory = () => {
  const [paymentInfo, setPaymentInfo] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://e-exam-pro-server.vercel.app/history/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPaymentInfo(data);
      });
  }, []);
  console.log(paymentInfo);
  return (
    <div>
      <Helmet>
        <title>E-ExamPro | Payment History </title>
      </Helmet>
      <h1 className="md:text-4xl text-2xl text-center my-5">
        Your Payment history
      </h1>

      <div className="py-20 flex justify-center items-center gap-5">
      {paymentInfo.map((price) => (
        <div className="md:block w-72 mt-5 pb-3 space-y-4 text-center border rounded-lg shadow-2xl primary-bg border-slate-200 hover:outline-blue-400 hover:outline translate">
        <p className="my-2 text-lg font-bold text-yellow-400">
          {price.packageName}
        </p>
        <h3 className="text-xl">${price.price}</h3>

        {/* <ul className='flex flex-col divide-y divide-base-200 divider'> */}
        <div className="flex flex-col divider divide-purple-950 h-fit">
          {price.features?.map((feature, index) => (
            <p
              key={index}
              className="inline-flex items-center justify-center uppercase text-start"
            >
              {feature.name}
              {feature.available ? (
                <FaCircleCheck className="ml-2 text-center text-slate-50" />
              ) : (
                <MdCancel className="ml-2 text-lg text-center text-red-500" />
              )}
            </p>
          ))}
        </div>
        <h1>---Paid---</h1>
      </div>
      ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
