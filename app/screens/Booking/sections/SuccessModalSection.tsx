import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { BikeCard } from '@app/components';
import { Bike } from '@app/models';
import styles from '../styles';

interface Props {
  visible: boolean;
  bike: Bike;
  onClose: () => void;
}

const BookingSuccessModal: React.FC<Props> = ({ visible, bike, onClose }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.successOverlay}>
        <View style={styles.successContainer}>
          <Text style={styles.successTitle}>Thank you!</Text>
          <Text style={styles.successSubtitle}>Your bike is booked.</Text>
          <View style={styles.successBikeWrapper}>
            <BikeCard data={bike} showPrice={false} onPress={() => {}} />
          </View>
          <TouchableOpacity style={styles.successButton} onPress={onClose}>
            <Text style={styles.successButtonText}>Go to Home Page</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default BookingSuccessModal;