import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../useAxiosSecure.jsx/useAxiosSecure'
import axios from 'axios'

const useResult = examId => {
  // const { user, loading } = useContext(AuthContext)
  //   const [axiosSecure] = useAxiosSecure()
  // const id = '64e8b9586f2385caa12fd4c7'

  console.log(examId)
  const {
    data: result,
    refetch,
    isLoading: loading
  } = useQuery({
    queryKey: ['result'],
    queryFn: async () => {
      const res = await axios.get(
        `https://e-exam-pro-server.vercel.app/result?examId=${examId}`
      )
      console.log(res)
      return res.data
    }
  })
  return [result, refetch, loading]
}

export default useResult
