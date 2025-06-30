import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import useRentAmount from '@app/services/hooks/useRentAmount';
import { RootStackParamList } from '@app/navigation';
import { NavBarHeader, BikeSummaryCard, DateRangePicker, BookingSummary } from '@app/components';

import styles from './styles';
import { ENV } from '../../../env';

type BookingScreenRouteProp = RouteProp<RootStackParamList, 'Booking'>;
type NavigationProp = StackNavigationProp<RootStackParamList, 'Booking'>;

const Booking = () => {
  const route = useRoute<BookingScreenRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { bike } = route.params;

  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();

  const { data: rentDetails, isLoading, error } = useRentAmount({
    bikeId: bike.id,
    userId: Number(ENV.USER_ID),
    dateFrom: startDate ?? '',
    dateTo: endDate ?? '',
  }, {
    enabled: !!startDate && !!endDate,
  });

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View style={styles.container}>
        <NavBarHeader
          title={route.name}
          hasBackButton
          onBackButtonPress={() => navigation.goBack()}
          headerHeight={70}
        />
        <ScrollView style={styles.contentWrapper}>
          <BikeSummaryCard data={bike} />
          <Text style={styles.sectionTitle}>
            Select date and time
          </Text>
          <DateRangePicker onConfirmRange={({ startDate, endDate }) => {
            setStartDate(startDate);
            setEndDate(endDate);
          }} />
          {isLoading && (
            <View style={styles.loadingWrapper}>
              <ActivityIndicator size="large" color="#1F49D1" />
            </View>
          )}
          {error && <Text style={styles.errorText}>Failed to load price. Please try again.</Text>}
          {rentDetails && !isLoading && !error && (
            <BookingSummary
              subtotal={rentDetails.rentAmount}
              serviceFee={rentDetails.fee}
            />
          )}
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Add to booking')}
            disabled={!rentDetails}
          >
            <Text style={styles.buttonText}>Add to booking</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Booking;