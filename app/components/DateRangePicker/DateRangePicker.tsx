import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import BottomSheetModal from '@app/components/BottomSheetModal';
import { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';

import { format } from 'date-fns';
import styles from './styles';


interface DateRangePickerProps {
  onSelect: (start: DateData, end: DateData) => void;
}

const DateRangePicker = ({ onSelect }: DateRangePickerProps) => {
  const bottomSheetRef = useRef<GorhomBottomSheetModal>(null);
  
  const handleOpen = () => bottomSheetRef.current?.present();

  const handleSelect = (day: DateData) => {
    // TODO: lógica de seleção de intervalo
    console.log('Selecionado:', day);
  };

  return (
    <>
      <TouchableOpacity onPress={handleOpen} style={styles.openButton}>
        <Text style={styles.buttonText}>Select Dates</Text>
      </TouchableOpacity>

      <BottomSheetModal ref={bottomSheetRef} snapPoints={['80%']}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Choose a date range</Text>
          <Calendar
            onDayPress={handleSelect}
            markingType="period"
            markedDates={{}} // TODO: preencher com datas marcadas
          />
        </View>
      </BottomSheetModal>
    </>
  );
};

export default DateRangePicker;