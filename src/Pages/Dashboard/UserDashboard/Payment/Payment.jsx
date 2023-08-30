import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useSubject from "../../../../Hooks/useSubject/useSubject";
import { useParams } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

// TODO
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_key);

const Payment = () => {
  const [subjects]= useSubject()
  const {id} = useParams()
  const packages = subjects.filter(subject => subject._id == id) 
  const price = 10
  return (
    <div className="bg-white flex flex-col lg:w-4/12 md:w-8/12 m-5 mx-auto p-24 text-black rounded-lg mt-5">
      <h1 className="text-3xl text-center mb-10">Payment</h1>
      <Elements stripe={stripePromise}>
        <CheckOutForm price={price} packages={packages}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
