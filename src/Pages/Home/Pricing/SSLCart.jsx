import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import usePrice from "../../../Hooks/usePrice/usePrice";
import useAxiosSecure from "../../../Hooks/useAxiosSecure.jsx/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Components/Loading/Loading";
import { AuthContext } from "../../../Provider/AuthProvider";

const SSLCart = () => {
  const [pricePackage] = usePrice();
  // console.log("10 >", pricePackage);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("Cardid");
  // console.log("dma d", id);

  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  const dateTime = new Date();

  const { data: priceData, isLoading } = useQuery({
    queryKey: ["priceData", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/price?id=${id}`);
      //console.log(res.data);
      return res.data;
    },
  });

  const cartPrice = pricePackage.filter((price) => price?._id == id);
  // console.log("serial number 45 >", cartPrice);
  const totalPrice = parseFloat(priceData?.packageAmount) * 92;
  const price = totalPrice;
  const feature = priceData?.features;
  // console.log("fkjfv erefg ker", feature);
  // console.log("serial number 67 >>>>", price);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("payment data>>>", data);
    (data.paymentId = priceData?.id),
      (data.packageName = cartPrice[0]?.name),
      (data.price = priceData?.packageAmount),
      (data.features = feature),
      (data.status = "paid"),
      (data.date = new Date(dateTime).toLocaleString());
    fetch("https://e-exam-pro-server.vercel.app/sslPayment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(data?.url);
        console.log(data?.url);
      });
  };

  return (
    <div className="mx-auto mt-10 ">
      <h1 className="mt-5 mb-10 text-3xl text-center ">SSL Payment Gateway</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto space-y-6  md:w-1/2"
      >
        <div className="flex items-center gap-5">
          <div className="w-1/2">
            <label htmlFor="userName" className="">
              Name
            </label>
            <br />
            <input
              className="w-full p-3  ag-transparent border-2 rounded-md shadow-md focus:outline-none  "
              defaultValue={user?.displayName}
              required
              {...register("userName")}
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="email"
              className="text-lg tracking-wider   "
            >
              Email
            </label>
            <br />
            <input
              className="w-full p-3  ag-transparent border-2 rounded-md shadow-md focus:outline-none  "
              required
              defaultValue={user?.email}
              {...register("email")}
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-1/2">
            <label htmlFor="phone" className="">
              Phone Number
            </label>
            <br />
            <input
              type="number"
              className=" ag-transparent border-2 focus:outline-none shadow-md   p-3 w-full rounded-md"
              placeholder="+8801000-000000"
              required
              {...register("phone")}
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="address"
              className="text-lg tracking-wider  "
            >
              Address
            </label>
            <br />
            <input
              className="w-full p-3  ag-transparent border-2 rounded-md shadow-md focus:outline-none  "
              defaultValue={user?.address}
              placeholder="Please your address"
              required
              {...register("address")}
            />
          </div>
        </div>
        <div className="w-full">
            <label
              htmlFor="adders"
              className="text-lg tracking-wider  "
            >
              Currency
            </label>
            <br />
            <select
              {...register("currency")}
              required
              className="w-full p-3  ag-transparent border-2 rounded-md shadow-md focus:outline-none  "
            >
              <option className=" " value="USD">
                USD
              </option>
              <option className=" " value="BDT">
                BDT
              </option>
              <option className=" " value="EUR">
                EUR
              </option>
              <option className=" " value="IND">
                IND
              </option>
              <option className=" " value="PAK">
                PAK
              </option>
            </select>
        </div>
        {errors.exampleRequired && <span>This field is required</span>}

        <div className="flex justify-center ">
          <input
            type="submit"
            value="Pay Now"
            className="w-1/2 py-3 mx-auto text-center duration-300 rounded-md cursor-pointer btn btn-success text-white tracking-wider"
          />
        </div>
      </form>
    </div>
  );
};

export default SSLCart;
