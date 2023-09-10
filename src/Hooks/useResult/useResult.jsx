import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../useAxiosSecure.jsx/useAxiosSecure'
import axios from 'axios'

const useResult = () => {
  // const { user, loading } = useContext(AuthContext)
  //   const [axiosSecure] = useAxiosSecure()
  //   console.log(id)
  const id = '64e8b9586f2385caa12fd4c7'

  const {
    data: result,
    refetch,
    isLoading: loading
  } = useQuery({
    queryKey: ['result'],
    queryFn: async () => {
      const res = await axios.get(`/result?id=${id}`)
      console.log(res)
      return res.data
    }
  })
  return [result, refetch, loading]
}

export default useResult
