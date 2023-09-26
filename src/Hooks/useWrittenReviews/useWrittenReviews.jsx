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
        `http://localhost:4000/written-answers?email=${user?.email}`
      )
      return res.data
    }
  })
  return [writtenAnswers, loading, refetch]
}

export default useWrittenReviews
