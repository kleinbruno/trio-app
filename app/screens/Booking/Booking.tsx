import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@app/navigation';
import styles from './styles';

type BookingScreenRouteProp = RouteProp<RootStackParamList, 'Booking'>;

const Booking = () => {
  const route = useRoute<BookingScreenRouteProp>();
  const { bike } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book: {bike.name}</Text>
    </View>
  );
};

export default Booking;