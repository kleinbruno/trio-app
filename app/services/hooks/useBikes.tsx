import { useQuery } from 'react-query';
import { api } from '../client';

const fetchBikes = async () => {
  const { data } = await api.get('/bikes/');
  return data;
};

const useBikes = () => useQuery('bikes', fetchBikes);

export default useBikes;