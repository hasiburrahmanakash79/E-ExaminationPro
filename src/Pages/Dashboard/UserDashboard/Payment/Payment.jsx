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
  const [pricePackage ]= usePrice()
  const id = useParams()
  const packages = pricePackage.filter(pricing => pricing._id == id) 
  // const price = 
  console.log(id);
  return (
    <div className="px-5 mt-5">
      <div className=" bg-white/5 flex flex-col lg:w-4/12 md:w-8/12 lg:mt-52  mx-auto p-12 text-white rounded-3xl shadow-2xl">
      <div className="lg:-mt-32 mx-auto">
      <PaymentCard/>
      </div>
      <h1 className="text-3xl text-center m-10">Payment</h1>
      
      <Elements stripe={stripePromise}>
        <CheckOutForm  packages={packages}></CheckOutForm>
      </Elements>
    </div>
    </div>
  );
};

export default Payment;
