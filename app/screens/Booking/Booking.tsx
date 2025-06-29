import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '@app/navigation';
import { NavBarHeader, BikeSummaryCard, DateRangePicker } from '@app/components';

import styles from './styles';

type BookingScreenRouteProp = RouteProp<RootStackParamList, 'Booking'>;
type NavigationProp = StackNavigationProp<RootStackParamList, 'Booking'>;

const Booking = () => {
  const route = useRoute<BookingScreenRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { bike } = route.params;

  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <NavBarHeader
        title={route.name}
        hasBackButton
        onBackButtonPress={() => navigation.goBack()}
        headerHeight={70}
      />

      <View style={{ paddingHorizontal: 24, marginTop: 24 }}>
        <BikeSummaryCard data={bike} />
        <Text style={{ marginTop: 32, marginBottom: 10, fontSize: 25, fontWeight: '700'}}>
          Select date and time
        </Text>
        <DateRangePicker
          onSelect={(start, end) => {
            console.log('Selecionado:', start, end);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Booking;