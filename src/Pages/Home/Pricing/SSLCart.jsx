import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { useEffect, useState } from "react";

const SSLCart = () => {
    const [infoPayment, setInfoPayment] = useState([]);
    const { id } = useParams();
    const { user } = useAuth();
    const Premium = "Premium";
    const dateTime = new Date();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        data.orderId = id;
        data.paymentName = Premium;
        data.orderDateTime = new Date(dateTime).toLocaleString();
        fetch("http://localhost:5000/sslPayment", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace(data?.url)
                console.log(data);
            })

    }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/payments/${id}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))

    // }, [id])


    return (
        <div className="grid grid-cols-5 m-7 ">
            <div className="col-span-2">

            </div>
            <form onSubmit={handleSubmit(onSubmit)}
                className="col-span-3 space-y-3"
            >
                <div className="flex items-center gap-5">
                    <div className="w-1/2">
                        <label htmlFor="name" className=""> Name  </label> <br />
                        <input
                            className="bg-white p-3 w-full text-slate-800 rounded-md"
                            defaultValue={user?.displayName}
                            required
                            {...register("name")}
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="email" className="text-lg font-bold text-slate-400 tracking-wider"> Email  </label> <br />
                        <input
                            className="bg-white p-3 w-full text-slate-800 rounded-md"
                            required
                            defaultValue={user?.email}
                            {...register("email")}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="w-1/2">
                        <label htmlFor="phone" className=""> Phone Number  </label> <br />
                        <input
                            className="bg-white p-3 w-full text-slate-800 rounded-md"
                            // defaultValue={user?.displayName}
                            placeholder="+88 010 00-000 00 0"
                            required
                            {...register("phone")}
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="address" className="text-lg font-bold text-slate-400 tracking-wider"> Address  </label> <br />
                        <input
                            className="bg-white p-3 w-full text-slate-800 rounded-md"
                            defaultValue={user?.address}
                            placeholder="Please your address"
                            required
                            {...register("address")}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="w-1/2">
                        <label htmlFor="postCode" className=""> Post Code  </label> <br />
                        <input
                            className="bg-white p-3 w-full text-slate-800 rounded-md"
                            // defaultValue={user?.displayName}
                            placeholder="price"
                            required
                            {...register("postCode")}
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="adders" className="text-lg font-bold text-slate-400 tracking-wider"> Currency  </label> <br />
                        <select {...register("currency")} required className="bg-white p-3 w-1/2 text-slate-800 rounded-md z-10">
                            <option value="USD">USD</option>
                            <option value="BDT">BDT</option>
                            <option value="EUR">EUR</option>
                            <option value="IND">IND</option>
                            <option value="PAK">PAK</option>
                        </select>
                    </div>
                </div>
                {errors.exampleRequired && <span>This field is required</span>}

                <input
                    type="submit"
                    value="Payment Bay"
                    className="w-full bg-slate-400 text-center rounded-md py-3 cursor-pointer"
                />

            </form>
        </div>
    );
};

export default SSLCart;