// src/components/AppModal/AppModal.tsx
import React from 'react';
import { Modal, View, Text } from 'react-native';
import styles from './styles';

interface AppModalProps {
  visible: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  children?: React.ReactNode;
}

const AppModal: React.FC<AppModalProps> = ({ visible, title, description, children }) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer} testID="app-modal-container">
          <Text style={styles.title}>{title}</Text>
          {description && <Text style={styles.description}>{description}</Text>}
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default AppModal;