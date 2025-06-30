import { useMutation } from 'react-query';
import { api } from '../client';

interface ReturnBikeInput {
  bikeId: number;
  userId: number;
}

const returnBike = async (params: ReturnBikeInput) => {
  const { data } = await api.post('/bikes/return', params);
  return data;
};

const useReturnBike = () => useMutation(returnBike);

export default useReturnBike;