import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../useAxiosSecure.jsx/useAxiosSecure';

const useUser = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: info, refetch, isLoading: p_loading } = useQuery({
        queryKey: ['profile_Info', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user?email=${user?.email}`);
            console.log(res)
            return res.data;
        }
    })
    return [info , refetch, p_loading]
};

export default useUser;