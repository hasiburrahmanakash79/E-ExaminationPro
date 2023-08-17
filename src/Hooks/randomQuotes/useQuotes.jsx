import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useQuotes = () => {
  const {
    data: quotes = [],
    isLoading: loading,
    refetch
  } = useQuery({
    queryKey: ['quotes'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/api/quotes')
      return res.data
    }
  })
  return [quotes, loading, refetch]
}

export default useQuotes
