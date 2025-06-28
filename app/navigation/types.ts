import { Bike } from '@app/models';

export type RootStackParamList = {
  'Bike Rental': undefined;
  Booking: { bike: Bike };
};