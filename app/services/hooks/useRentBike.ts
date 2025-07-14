import { useMutation } from 'react-query';
import { api } from '../client';
import { RentDetails } from '@app/models/RentDetails';

interface RentBikeInput {
  bikeId: number;
  userId: number;
  dateFrom: string;
  dateTo: string;
}

const rentBike = async (payload: RentBikeInput): Promise<RentDetails> => {
  const { data } = await api.post('/bikes/rent', payload);
  return data;
};

const useRentBike = () => useMutation(rentBike);

export default useRentBike;