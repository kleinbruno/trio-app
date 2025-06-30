import { useQuery } from 'react-query';
import axios from 'axios';
import { ENV } from '../../env';

const headers = {
  'Content-Type': 'application/json',
  Authorization: ENV.CANDIDATE_TOKEN,
};

const fetchBikes = async () => {
  const { data } = await axios.get(`${ENV.API_BASE_URL}/bikes/`, { headers });
  return data;
};

const useBikes = () => useQuery('bikes', fetchBikes);

export default useBikes;