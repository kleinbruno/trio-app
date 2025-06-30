import React from 'react';
import { View, Text } from 'react-native';
import DateRangePicker from '@app/components/DateRangePicker';
import styles from '../styles';

interface Props {
  onSelectRange: (range: { startDate: string; endDate: string }) => void;
}

const DatePickerSection: React.FC<Props> = ({ onSelectRange }) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Select date and time</Text>
      <DateRangePicker onConfirmRange={onSelectRange} />
    </View>
  );
};

export default DatePickerSection;