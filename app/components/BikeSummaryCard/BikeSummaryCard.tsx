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
  <View style={styles.cardContainer}>
    <Image
      style={styles.bikeImage}
      source={{ uri: data.imageUrls[0] }}
      resizeMode="contain"
      defaultSource={BikePlaceholder}
    />
    <View style={styles.bikeTextContainer}>
      <Text style={styles.bikeName}>{data.name}</Text>
      <BikeTypeBadge type={data.type} />
      <Text style={styles.bikePrice}>{data.rate} €/Day</Text>
    </View>
  </View>
);

export default BikeSummaryCard;
