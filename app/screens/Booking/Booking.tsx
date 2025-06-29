import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '@app/navigation';
import { NavBarHeader, BikeSummaryCard, DateRangePicker, BookingSummary } from '@app/components';

import styles from './styles';

type BookingScreenRouteProp = RouteProp<RootStackParamList, 'Booking'>;
type NavigationProp = StackNavigationProp<RootStackParamList, 'Booking'>;

const Booking = () => {
  const route = useRoute<BookingScreenRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { bike } = route.params;

  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <NavBarHeader
        title={route.name}
        hasBackButton
        onBackButtonPress={() => navigation.goBack()}
        headerHeight={70}
      />
      <View style={styles.contentWrapper}>
        <BikeSummaryCard data={bike} />
        <Text style={styles.sectionTitle}>
          Select date and time
        </Text>
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          onChangeStartDate={setStartDate}
          onChangeEndDate={setEndDate}
        />
        <BookingSummary subtotal={165.0} serviceFee={24.75} />
      </View>
    </SafeAreaView>
  );
};

export default Booking;