// Booking/components/BookingSummarySection.tsx
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import BookingSummary from '@app/components/BookingSummary';
import styles from '../styles';

interface Props {
  isLoading: boolean;
  error: unknown;
  rentDetails?: {
    rentAmount: number;
    fee: number;
  };
}

const BookingSummarySection: React.FC<Props> = ({ isLoading, error, rentDetails }) => {
  if (isLoading) {
    return (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator size="large" color="#1F49D1" />
      </View>
    );
  }

  if (error instanceof Error) {
    return <Text style={styles.errorText}>Failed to load price: {error.message}</Text>;
  }

  if (rentDetails) {
    return (
      <BookingSummary
        subtotal={rentDetails.rentAmount}
        serviceFee={rentDetails.fee}
      />
    );
  }

  return null;
};

export default BookingSummarySection;
