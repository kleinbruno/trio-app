import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import DateRangePicker from '../';

describe('DateRangePicker component', () => {
  const mockOnConfirmRange = jest.fn();

  beforeEach(() => {
    mockOnConfirmRange.mockClear();
    render(<DateRangePicker onConfirmRange={mockOnConfirmRange} />);
  });

  it('should render placeholder text before selecting dates', () => {
    expect(screen.getByTestId('date-input-text')).toHaveTextContent('Select a date');
  });

  it('should allow selecting a start and end date and confirm the range', async () => {
    const openButton = screen.getByTestId('open-picker');
    fireEvent.press(openButton);

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const todayStr = today.toISOString().split('T')[0];
    const tomorrowStr = tomorrow.toISOString().split('T')[0];

    const calendar = await screen.findByTestId('calendar');

    fireEvent(calendar, 'dayPress', { dateString: todayStr });
    fireEvent(calendar, 'dayPress', { dateString: tomorrowStr });

    const confirmBtn = screen.getByTestId('confirm-button');
    fireEvent.press(confirmBtn);

    expect(mockOnConfirmRange).toHaveBeenCalledWith({
      startDate: todayStr,
      endDate: tomorrowStr,
    });
  });
});