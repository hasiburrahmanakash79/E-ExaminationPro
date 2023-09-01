import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const useLongQuestions = History => {
  const {
    data: longQuestions = [],
    isLoading: loading,
    refetch
  } = useQuery({
    queryKey: ['longQuestions'],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/longQ?subject=${History}`
      ) // to todo add date subject code etc
      return res.data
    }
  })
  return [longQuestions, loading, refetch]
}

export default useLongQuestions
