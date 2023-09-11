import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const usePrice = () => {
  const {
    data: pricePackage = [],
    isLoading: loading,
    refetch
  } = useQuery({
    queryKey: ['price'],
    queryFn: async () => {
      const res = await axios.get(
        'http://localhost:4000/price'
      )
      return res.data
    }
  })
  return [pricePackage, loading, refetch]

};

export default usePrice;