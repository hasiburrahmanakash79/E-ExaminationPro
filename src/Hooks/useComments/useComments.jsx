import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const useComments = () => {
  const {
    data: comments = [],
    isLoading: loading,
    refetch
  } = useQuery({
    queryKey: ['comments'],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:4000/comments`) // to todo add date subject code etc
      return res.data
    }
  })
  return [comments, loading, refetch]
}

export default useComments;





