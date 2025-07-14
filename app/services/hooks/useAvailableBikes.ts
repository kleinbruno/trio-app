import { useQuery } from 'react-query';
import { api } from '../client';
import { Bike } from '@app/models/Bike';

const fetchAvailableBikes = async (): Promise<Bike[]> => {
  const { data } = await api.get('/bikes/available');
  return data;
};

const useAvailableBikes = () => useQuery<Bike[]>('available-bikes', fetchAvailableBikes);

export default useAvailableBikes;