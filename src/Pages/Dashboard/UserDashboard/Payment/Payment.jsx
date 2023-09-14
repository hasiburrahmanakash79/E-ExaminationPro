import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useSubject from "../../../../Hooks/useSubject/useSubject";
import { useParams } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import PaymentCard from "./PaymentCard";
import usePrice from "../../../../Hooks/usePrice/usePrice";

// TODO
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_key);

const Payment = () => {
  const [subjects] = useSubject()
  const [pricePackage] = usePrice()
  const { id } = useParams()
  const packages = pricePackage.filter(price => price.id == id)
  const price = packages[0]?.packageAmount
  console.log(price);
  return (
    <div className="p-5 mt-5">
      {/* <Helmet><title>E-ExamPro | Payment </title></Helmet> */}
      <div className=" bg-white/5 flex flex-col lg:w-5/12 md:w-8/12 lg:mt-32 lg:mb-16  mx-auto p-12 text-white rounded-3xl shadow-2xl">
        <div className="lg:-mt-32 md:-mt-16 mx-auto md:block hidden">
          <PaymentCard />
        </div>
        <h1 className="text-3xl text-center m-10">Payment</h1>

        <Elements stripe={stripePromise}>
          <CheckOutForm price={price} packages={packages}></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
