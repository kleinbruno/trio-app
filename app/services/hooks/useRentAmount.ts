import { useQuery } from 'react-query';
import { api } from '../client';
import { RentAmount } from '@app/models/RentAmount';

interface RentAmountInput {
  bikeId: number;
  userId: number;
  dateFrom: string;
  dateTo: string;
}

const fetchRentAmount = async (params: RentAmountInput): Promise<RentAmount> => {
  const { data } = await api.post<RentAmount>('/bikes/amount', params);
  return data;
};

const useRentAmount = (params: RentAmountInput, options?: { enabled?: boolean }) =>
  useQuery<RentAmount>(['rent-amount', params], () => fetchRentAmount(params), {
    enabled: options?.enabled,
  });

export default useRentAmount;