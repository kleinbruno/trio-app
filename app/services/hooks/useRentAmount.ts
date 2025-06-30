import { useQuery } from 'react-query';
import { api } from '../client';

interface RentAmountInput {
  bikeId: number;
  userId: number;
  dateFrom: string;
  dateTo: string;
}

const fetchRentAmount = async (params: RentAmountInput) => {
  const { data } = await api.post('/bikes/amount', params);
  return data;
};

const useRentAmount = (enabled: boolean, params: RentAmountInput) =>
  useQuery(['rent-amount', params], () => fetchRentAmount(params), { enabled });

export default useRentAmount;