import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useAdmin = () => {
    const {user} = useContext(AuthContext)
    const {data: isAdmin, isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async() => {
            res = await axios.get(`https://e-exam-pro-server.vercel.app/users/admin/${user?.email}`)
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;