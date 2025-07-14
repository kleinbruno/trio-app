import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react-native';
import Booking from '../Booking';
import { mockedBike } from '@app/mocks/Bike';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';

// Mock dos hooks
jest.mock('@app/services/hooks/useRentAmount', () => () => ({
  data: { rentAmount: 400, fee: 60, totalAmount: 460 },
  isLoading: false,
  error: null,
}));

jest.mock('@app/services/hooks/useRentBike', () => () => ({
  mutate: jest.fn((_data, { onSuccess }) => onSuccess?.()),
}));

jest.mock('@app/services/hooks/useReturnBike', () => () => ({
  mutate: jest.fn(),
}));

// Mock navegação
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useRoute: () => ({
      name: 'Booking',
      params: { bike: mockedBike },
    }),
    useNavigation: () => ({
      goBack: jest.fn(),
      navigate: jest.fn(),
    }),
  };
});

jest.mock('@app/components/DateRangePicker', () => {
  const React = require('react');
  return ({ onConfirmRange }: any) => {
    React.useEffect(() => {
      onConfirmRange({ startDate: '2023-09-21', endDate: '2023-09-25' });
    }, []);
    return null;
  };
});

describe('Booking screen', () => {
  it('should render booking info and confirm booking flow', async () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Booking />
        </NavigationContainer>
      </QueryClientProvider>
    );

    expect(screen.getByText('Select date and time')).toBeTruthy();
    expect(screen.getByText(mockedBike.name)).toBeTruthy();

    fireEvent.press(screen.getByText('Add to booking'));

    await waitFor(() => {
      expect(screen.getByText('Thank you!')).toBeTruthy();
      expect(screen.getByText('Your bike is booked.')).toBeTruthy();
    });
  });
});