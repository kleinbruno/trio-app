import React, { FC } from 'react';
import { View, Image, Text } from 'react-native';
import { BikeTypeBadge } from '@app/components';
import { BikePlaceholder } from '@app/assets';
import { Bike } from '@app/models';
import styles from './styles';

interface BikeSummaryCardProps {
  data: Bike;
}

const BikeSummaryCard: FC<BikeSummaryCardProps> = ({ data }) => (
  <View style={styles.cardContainer} testID="bike-summary-card">
    <Image
      style={styles.bikeImage}
      source={{ uri: data.imageUrls[0] }}
      resizeMode="contain"
      defaultSource={BikePlaceholder}
      testID="bike-summary-image"
    />
    <View style={styles.bikeTextContainer}>
      <Text style={styles.bikeName} testID="bike-summary-name">
        {data.name}
      </Text>
      <BikeTypeBadge type={data.type} />
      <Text style={styles.bikePrice} testID="bike-summary-rate">
        {data.rate} €/Day
      </Text>
    </View>
  </View>
);

export default BikeSummaryCard;