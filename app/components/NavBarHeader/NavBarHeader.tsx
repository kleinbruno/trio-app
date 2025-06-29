import React, { FC } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { BackButton } from '@app/assets';

import styles from './styles';

interface NavBarHeaderProps {
  title: string;
  hasBackButton?: boolean;
  onBackButtonPress?: () => void;
  headerHeight?: number;
}

const NavBarHeader: FC<NavBarHeaderProps> = ({
  title,
  hasBackButton = false,
  onBackButtonPress,
  headerHeight,
}) => (
  <View
    testID="nav-bar-header"
    style={[styles.header, headerHeight ? { height: headerHeight } : null]}  >    
    <View
      style={[
        styles.headerSubContainer,
        hasBackButton && styles.headerTextCentered,
      ]}
    >
      {hasBackButton && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={onBackButtonPress}
        >
          <Image source={BackButton} style={styles.backIcon} />
        </TouchableOpacity>
      )}
      <Text
        style={[
          styles.headerText,
          hasBackButton && styles.headerTextCentered,
        ]}
      >
        {title}
      </Text>
    </View>
  </View>
);

export default NavBarHeader;
