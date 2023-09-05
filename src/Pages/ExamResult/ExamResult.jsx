import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure.jsx/useAxiosSecure';

const ExamResult = () => {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const id = searchParams.get('id')
    const [axiosSecure] = useAxiosSecure()
    const { data: result, refetch, isLoading: r_loading } = useQuery({
        queryKey: ['result', id],
        queryFn: async () => {

            const res = await axiosSecure.get(`/result?id=${id}`);
            console.log(res)
            return res.data;
        }
    })
    console.log(result)
    return (
        <div>
            <h1>hi</h1>
        </div>
    );
};

export default ExamResult;