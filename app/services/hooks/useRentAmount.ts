import { useQuery } from 'react-query';
import { api } from '../client';
import { RentDetails } from '@app/models/RentDetails';

interface RentAmountInput {
  bikeId: number;
  userId: number;
  dateFrom: string;
  dateTo: string;
}

const fetchRentAmount = async (params: RentAmountInput): Promise<RentDetails> => {
  const { data } = await api.post<RentDetails>('/bikes/amount', params);
  return data;
};

const useRentAmount = (params: RentAmountInput, options?: { enabled?: boolean }) =>
  useQuery<RentDetails>(['rent-amount', params], () => fetchRentAmount(params), {
    enabled: options?.enabled,
  });

export default useRentAmount;