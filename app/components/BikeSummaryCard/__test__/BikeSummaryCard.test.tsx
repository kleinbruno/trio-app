import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { render, screen } from '@testing-library/react-native';
import BikeSummaryCard from '../';
import { mockedBike } from '@app/mocks';

describe('BikeSummaryCard component', () => {
  beforeEach(() => {
    render(<BikeSummaryCard data={mockedBike} />);
  });

  it('should render the card container', () => {
    const card = screen.getByTestId('bike-summary-card');
    expect(card).toBeVisible();
  });

  it('should render bike image', () => {
    const image = screen.getByTestId('bike-summary-image');
    expect(image).toBeVisible();
  });

  it('should render bike name', () => {
    const name = screen.getByTestId('bike-summary-name');
    expect(name).toHaveTextContent(mockedBike.name);
  });

  it('should render bike rate', () => {
    const rate = screen.getByTestId('bike-summary-rate');
    expect(rate).toHaveTextContent(`${mockedBike.rate} €/Day`);
  });
});