import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../useAxiosSecure.jsx/useAxiosSecure'
import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'

const useResult = examId => {
  // const { user, loading } = useContext(AuthContext)
  //   const [axiosSecure] = useAxiosSecure()
  // const id = '64e8b9586f2385caa12fd4c7'

  //console.log(examId)

  const { user, loading } = useContext(AuthContext)
  const {
    data: result,
    refetch,
    isLoading: loadings
  } = useQuery({
    queryKey: ['result'],
    enabled:!loading ,
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:4000/result?examId=${examId}&email=${user?.email}`
      )
      //console.log(res)
      return res.data
    }
  })
  return [result, refetch, loadings]
}

export default useResult
