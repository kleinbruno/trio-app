import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#EDEDED',
    alignItems: 'center',
    gap: 14,
  },
  bikeImage: {
    width: 64,
    height: 64,
    borderRadius: 12,
  },
  bikeTextContainer: {
    flex: 1,
    gap: 6,
  },
  bikeName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1B1B1B',
    fontFamily: 'Mont',
  },
  bikePrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1B1B1B',
    fontFamily: 'Mont',
  },
});

export default styles;