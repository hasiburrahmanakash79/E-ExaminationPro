import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import useAuth from '../useAuth/useAuth'
const useWrittenReviews = () => {
  const { user, loading: authLoading } = useAuth()
  const {
    data: writtenAnswers = [],
    isLoading: loading,
    refetch
  } = useQuery({
    queryKey: ['writtenAnswers', user?.email],
    enabled: !authLoading,
    queryFn: async () => {
      const res = await axios.get(
        `https://e-exam-pro-server.vercel.app/written-answers?email=${user?.email}`
      )
      return res.data
    }
  })
  return [writtenAnswers, loading, refetch]
}

export default useWrittenReviews
