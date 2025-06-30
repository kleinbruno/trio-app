import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useQueryClient } from 'react-query';

import { RootStackParamList } from '@app/navigation';
import { NavBarHeader, BikeSummaryCard } from '@app/components';
import useRentAmount from '@app/services/hooks/useRentAmount';
import useRentBike from '@app/services/hooks/useRentBike';
import useReturnBike from '@app/services/hooks/useReturnBike';
import { ENV } from '../../../env';

import styles from './styles';
import DatePickerSection from './sections/DatePickerSection';
import BookingSummarySection from './sections/BookingSummarySection';
import BookingSuccessModal from './sections/SuccessModalSection';

type BookingScreenRouteProp = RouteProp<RootStackParamList, 'Booking'>;
type NavigationProp = StackNavigationProp<RootStackParamList, 'Booking'>;

const Booking = () => {
  const route = useRoute<BookingScreenRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { bike } = route.params;

  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const queryClient = useQueryClient();
  const rentBikeMutation = useRentBike();
  const returnBikeMutation = useReturnBike();

  const { data: rentDetails, isLoading, error } = useRentAmount(
    {
      bikeId: bike.id,
      userId: Number(ENV.USER_ID),
      dateFrom: startDate ?? '',
      dateTo: endDate ?? '',
    }, {
      enabled: !!startDate && !!endDate,
    });

//Since we don’t have a flow for returning a bike, if I get the error UnavailableBikeError when trying to reserve a bike, that bike is returned
useEffect(() => {
  if (error && typeof error === 'object' && 'response' in error) {
    const err = error as any;
    const parsed = err.response?.data;

    if (parsed?.errorType === 'UnavailableBikeError') {
      returnBikeMutation.mutate(
        {
          bikeId: bike.id,
          userId: Number(ENV.USER_ID),
        },
      );
    }
  }
}, [error]);

  const handleBooking = () => {
    if (!startDate || !endDate) return;

    rentBikeMutation.mutate(
      {
        bikeId: bike.id,
        userId: Number(ENV.USER_ID),
        dateFrom: startDate,
        dateTo: endDate,
      },
      {
        onSuccess: () => setSuccessModalVisible(true),
        onError: (error) => {
          console.error('Rent error:', error);
        },
      }
    );
  };

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
          <DatePickerSection
            onSelectRange={({ startDate, endDate }) => {
              setStartDate(startDate);
              setEndDate(endDate);
            }}
          />
          <BookingSummarySection
            isLoading={isLoading}
            error={error}
            rentDetails={rentDetails}
          />
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleBooking}
            disabled={!rentDetails}
          >
            <Text style={styles.buttonText}>Add to booking</Text>
          </TouchableOpacity>
        </View>
        <BookingSuccessModal
          visible={successModalVisible}
          bike={bike}
          onClose={() => {
            setSuccessModalVisible(false);
            navigation.navigate('Bike Rental');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Booking;