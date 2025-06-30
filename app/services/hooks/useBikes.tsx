import { useQuery } from 'react-query';
import { api } from '../client';
import { Bike } from '@app/models/Bike';

const fetchBikes = async (): Promise<Bike[]> => {
  const { data } = await api.get('/bikes/');
  return data;
};

const useBikes = () => useQuery<Bike[]>('bikes', fetchBikes);

export default useBikes;