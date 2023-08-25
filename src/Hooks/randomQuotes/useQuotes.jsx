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
      const res = await axios.get('https://e-exam-pro-server.vercel.app/api/quotes')
      return res.data
    }
  })
  return [quotes, loading, refetch]
}

export default useQuotes
