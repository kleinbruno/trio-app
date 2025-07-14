import axios from 'axios';
import { ENV } from '../../env';

export const api = axios.create({
  baseURL: ENV.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: ENV.CANDIDATE_TOKEN,
  },
});