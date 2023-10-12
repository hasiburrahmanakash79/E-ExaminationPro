import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import useAuth from "../useAuth/useAuth"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

export const useSSLCommerz = () => {
    const { user, loading } = useContext(AuthContext);
    const userEmail = user?.email
    console.log(userEmail);
    const { data: isSuccess, refetch } = useQuery({
        queryKey: ["isSuccess", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3500/sslPayment/${user?.email}`)
            return res?.data
        }
    })
    return [isSuccess, refetch]
}
