import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface BookingSummaryProps {
  subtotal: number;
  serviceFee: number;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({ subtotal, serviceFee }) => {
  const total = subtotal + serviceFee;

  return (
    <View style={styles.container} testID="booking-summary">
      <Text style={styles.title} testID="booking-title">Booking Overview</Text>
      <View style={styles.separator} />
      <View style={styles.row}>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={styles.value} testID="booking-subtotal">{subtotal.toFixed(2)} €</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Service Fee</Text>
        <Text style={styles.value} testID="booking-fee">{serviceFee.toFixed(2)} €</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue} testID="booking-total">{total.toFixed(2)} €</Text>
      </View>
    </View>
  );
};

export default BookingSummary;