import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { render, screen } from '@testing-library/react-native';
import BookingSummary from '../';

describe('BookingSummary component', () => {
  const subtotal = 120.5;
  const serviceFee = 10;

  beforeEach(() => {
    render(<BookingSummary subtotal={subtotal} serviceFee={serviceFee} />);
  });

  it('should render the title', () => {
    expect(screen.getByTestId('booking-title')).toHaveTextContent('Booking Overview');
  });

  it('should show subtotal', () => {
    expect(screen.getByTestId('booking-subtotal')).toHaveTextContent('120.50 €');
  });

  it('should show service fee', () => {
    expect(screen.getByTestId('booking-fee')).toHaveTextContent('10.00 €');
  });

  it('should calculate and show total', () => {
    expect(screen.getByTestId('booking-total')).toHaveTextContent('130.50 €');
  });
});