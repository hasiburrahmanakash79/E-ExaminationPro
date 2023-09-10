import React from 'react';
import useAxiosSecure from '../useAxiosSecure.jsx/useAxiosSecure';

import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useLiveExam = () => {
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data:notices, isLoading:isNoticeLoading } = useQuery({
      queryKey: ['noticeDATA', user?.email],
      enabled: !loading,
      queryFn: async () => {
        const res = await axiosSecure.get(`notice?instructor=${user?.email}`);
        return res.data;
      }
    })
    return [notices, isNoticeLoading]
};

export default useLiveExam;