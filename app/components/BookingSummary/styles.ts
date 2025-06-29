import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 12,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    color: '#000',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#EDEDED',
    marginVertical: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: '#777',
    fontSize: 14,
  },
  value: {
    fontSize: 14,
    color: '#000',
  },
  totalLabel: {
    fontWeight: '700',
    fontSize: 16,
  },
  totalValue: {
    fontWeight: '700',
    fontSize: 16,
  },
});

export default styles;