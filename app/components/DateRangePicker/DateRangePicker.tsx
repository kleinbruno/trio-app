import React, { FC, useState, useMemo, useRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { eachDayOfInterval, format, parseISO } from 'date-fns';
import { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';
import BottomSheetModal from '../BottomSheetModal';
import styles from './styles';

interface DateRangePickerProps {
  startDate: string | undefined;
  endDate: string | undefined;
  onChangeStartDate: (date: string) => void;
  onChangeEndDate: (date: string) => void;
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

const DateRangePicker: FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  onChangeStartDate,
  onChangeEndDate,
}) => {
  const bottomSheetRef = useRef<GorhomBottomSheetModal>((null));
  const [selectingStart, setSelectingStart] = useState(true);

  const markedDates = useMemo(
    () => getMarkedDates(startDate, endDate),
    [startDate, endDate]
  );

  const onDayPress = (day: { dateString: string }) => {
    if (selectingStart) {
      onChangeStartDate(day.dateString);
      setSelectingStart(false);
    } else {
      onChangeEndDate(day.dateString);
      setSelectingStart(true);
    }
  };

  const handleOpen = () => {
    bottomSheetRef.current?.present();
  };

  const handleClose = () => {
    bottomSheetRef.current?.dismiss();
  };

  return (
    <>
      <Pressable style={styles.dateInputContainer} onPress={handleOpen}>
        <Text style={styles.dateInputText}>
          {startDate && endDate
            ? `From ${format(parseISO(startDate), 'MMM/dd')} to ${format(parseISO(endDate), 'MMM/dd')}`
            : 'Select a date'}
        </Text>
      </Pressable>

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
          />
          <Pressable style={styles.selectButton} onPress={handleClose}>
            <Text style={styles.selectButtonText}>Select</Text>
          </Pressable>
        </View>
      </BottomSheetModal>
    </>
  );
};

export default DateRangePicker;