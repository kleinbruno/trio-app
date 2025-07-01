import React, { FC, useState, useMemo, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { eachDayOfInterval, format, parseISO } from 'date-fns';
import { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';
import BottomSheetModal from '../BottomSheetModal';
import styles from './styles';

interface DateRangePickerProps {
  onConfirmRange: (range: { startDate: string; endDate: string }) => void;
}

const getMarkedDates = (start?: string, end?: string) => {
  if (!start || !end) return {};

  const range = eachDayOfInterval({
    start: parseISO(start),
    end: parseISO(end),
  });

  const marked: Record<string, any> = {};

  range.forEach((date, index) => {
    const formatted = format(date, 'yyyy-MM-dd');

    if (index === 0) {
      marked[formatted] = {
        startingDay: true,
        color: 'white',
        textColor: '#1F49D1',
      };
    } else if (index === range.length - 1) {
      marked[formatted] = {
        endingDay: true,
        color: 'white',
        textColor: '#1F49D1',
      };
    } else {
      marked[formatted] = {
        color: '#FFFFFF33',
        textColor: 'white',
      };
    }
  });

  return marked;
};

const DateRangePicker: FC<DateRangePickerProps> = ({ onConfirmRange }) => {
  const bottomSheetRef = useRef<GorhomBottomSheetModal>(null);
  const [selectingStart, setSelectingStart] = useState(true);
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();

  const markedDates = useMemo(() => getMarkedDates(startDate, endDate), [startDate, endDate]);

  const handleOpen = () => {
    bottomSheetRef.current?.present();
  };

  const handleClose = () => {
    bottomSheetRef.current?.dismiss();
  };

  const onDayPress = (day: { dateString: string }) => {
    if (selectingStart) {
      setStartDate(day.dateString);
      setEndDate(undefined);
      setSelectingStart(false);
    } else {
      setEndDate(day.dateString);
      setSelectingStart(true);
    }
  };

  const handleConfirm = () => {
    if (startDate && endDate) {
      onConfirmRange({ startDate, endDate });
      handleClose();
    }
  };

  return (
    <>
      <TouchableOpacity style={styles.dateInputContainer} onPress={handleOpen} testID="open-picker">
        <Text style={styles.dateInputText} testID="date-input-text">
          {startDate && endDate
            ? `From ${format(parseISO(startDate), 'MMM/dd')} to ${format(parseISO(endDate), 'MMM/dd')}`
            : 'Select a date'}
        </Text>
      </TouchableOpacity>

      <BottomSheetModal ref={bottomSheetRef} snapPoints={['50%']} backgroundColor="#1F49D1">
        <View style={styles.modalContent}>
          <Calendar
            minDate={new Date().toISOString().split('T')[0]}
            current={startDate || new Date().toISOString().split('T')[0]}
            onDayPress={onDayPress}
            markedDates={markedDates}
            markingType="period"
            theme={{
              calendarBackground: '#1F49D1',
              monthTextColor: 'white',
              dayTextColor: 'white',
              textDisabledColor: '#ffffff50',
              arrowColor: 'white',
              textSectionTitleColor: 'white',
              selectedDayBackgroundColor: '#FFFFFF33',
            }}
            testID="calendar"
          />
          <TouchableOpacity
            style={[styles.selectButton, !(startDate && endDate) && { opacity: 0.5 }]}
            disabled={!(startDate && endDate)}
            onPress={handleConfirm}
            testID="confirm-button"
          >
            <Text style={styles.selectButtonText}>Select</Text>
          </TouchableOpacity>
        </View>
      </BottomSheetModal>
    </>
  );
};

export default DateRangePicker;