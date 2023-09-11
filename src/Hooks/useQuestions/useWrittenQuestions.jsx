import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const useWrittenQuestions = Mathematics => {
  const {
    data: writtenQuestions = [],
    isLoading: loading,
    refetch
  } = useQuery({
    queryKey: ['shortQuestions'],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:4000/shortQ?subject=${Mathematics}`
      ) // to todo add date subject code etc
      return res.data
    }
  })
  return [writtenQuestions, loading, refetch]
}

export default useWrittenQuestions
