import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../useAxiosSecure.jsx/useAxiosSecure';

const useInstructor = () => {
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
            console.log(res.data);
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;