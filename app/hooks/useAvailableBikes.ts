import { useQuery } from 'react-query';
import axios from 'axios';
import { ENV } from '../../env';

const headers = {
  'Content-Type': 'application/json',
  Authorization: ENV.CANDIDATE_TOKEN,
};

const fetchAvailableBikes = async () => {
  const { data } = await axios.get(`${ENV.API_BASE_URL}/bikes/available`, { headers });
  return data;
};

const useAvailableBikes = () => useQuery('available-bikes', fetchAvailableBikes);

export default useAvailableBikes;