import { useQuery } from 'react-query';
import { api } from '../client';

const fetchAvailableBikes = async () => {
  const { data } = await api.get('/bikes/available');
  return data;
};

const useAvailableBikes = () => useQuery('available-bikes', fetchAvailableBikes);

export default useAvailableBikes;