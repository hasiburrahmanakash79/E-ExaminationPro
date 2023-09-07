import React, { useContext } from 'react';

import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../useAxiosSecure.jsx/useAxiosSecure';
import { AuthContext } from '../../Provider/AuthProvider';

const useInstructor = (examID) => {
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/result?email${user?.email}&examID=${examID}`)
            console.log(res.data);
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;