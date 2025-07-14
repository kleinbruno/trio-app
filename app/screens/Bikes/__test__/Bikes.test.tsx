import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Bikes from '..';
import { mockedBikesArray } from '@app/mocks/Bike';

jest.mock('@app/services/hooks', () => ({
  useAvailableBikes: () => ({
    data: mockedBikesArray,
    isLoading: false,
    refetch: jest.fn(),
  }),
}));

jest.mock('@shopify/flash-list', () => {
  const React = require('react');
  const { FlatList } = require('react-native');

  return {
    FlashList: ({ renderItem, data, keyExtractor }: any) => (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    ),
  };
});

const Stack = createStackNavigator();

describe('Bikes screen', () => {
  it('should open modal when clicking a bike card', async () => {
    render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Bikes" component={Bikes} />
        </Stack.Navigator>
      </NavigationContainer>
    );

    const bikeCardButton = await screen.findAllByTestId('bike-card-button');
    fireEvent.press(bikeCardButton[0]);

    const description = await screen.findByText(/lorem ipsum/i);
    expect(description).toBeTruthy();
  });
});