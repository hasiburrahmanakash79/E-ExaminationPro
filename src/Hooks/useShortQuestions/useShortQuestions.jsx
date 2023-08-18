import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const useShortQuestions = (Mathematics) => {
  const {
    data: shortQuestions = [],
    isLoading: loading,
    refetch
  } = useQuery({
    queryKey: ['shortQuestions'],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/shortQ?subject=${Mathematics}`) // to todo add date subject code etc
      return res.data
    }
  })
  return [shortQuestions, loading, refetch]
}

export default useShortQuestions
