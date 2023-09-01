import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure.jsx/useAxiosSecure";
import { AuthContext } from "../../../../Provider/AuthProvider";

const CheckOutForm = ({ price, packages }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((data) => {
      setClientSecret(data.data.clientSecret);
    });
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // console.log(card);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
      console.log("error:", error);
    } else {
      setError("");
      console.log("payment:", paymentMethod);
    }
    setProcessing(true)

    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details:{
          name: user?.displayName || "user",
          email: user?.email
        },
      }
    })
    if(confirmError){
      console.log(confirmError);
    }
    setProcessing(false)
    console.log("paymentIntent: ",paymentIntent);
    
    if (!processing) {
      setProcessing(true);
      setTimeout(() => {
        setProcessing(false);
      }, 1500);
    }

    if(paymentIntent?.status === "succeeded"){
      setSuccess(paymentIntent.id)

      const payment = {
        email: user?.email,
        transactionId: paymentIntent?.id,
        price,
        Status: "Paid",
        date: new Date(),
        packageName: packages?.subject,
        paymentId: packages?._id
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res?.data);
        if (res?.data?.insertResult?.insertedId) {
          Swal.fire({
            showConfirmButton: false,
            timer: 1500,
            title: "Payment Successful",
            icon: "success",
          }); 
        }
      });

    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#aab7c4",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          // className="bg-gray-400 w-full p-2 mt-7 rounded"
        className={processing ? 'processing bg-gray-400 w-full p-2 mt-7 rounded' : 'bg-gray-400 w-full p-2 mt-7 rounded'}
          type="submit"
          disabled={!stripe || processing}
        >
          {processing ? 'Processing...' : 'Confirm Pay'}
        </button>
      </form>
      <div className=" mt-5">
        {error && (
          <p className="text-red-600 mt-5 text-center">Failed: {error}</p>
        )}
        {success && (
        <p className="text-green-700 text-center">
          Complete Your Payment. Your Transaction ID: {success}
        </p>
      )}
      </div>
    </div>
  );
};

export default CheckOutForm;
