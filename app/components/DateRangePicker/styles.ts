import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  dateInputContainer: {
    borderWidth: 1,
    borderColor: '#EDEDED',
    borderRadius: 30,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  dateInputText: {
    color: '#1B1B1B',
    fontSize: 16,
    fontFamily: 'Mont',
  },
  modalContent: {
    flex: 1,
    backgroundColor: '#1F49D1',
    paddingBottom: 40,
    justifyContent: 'flex-end',
  },
  selectButton: {
    backgroundColor: '#FFD775',
    paddingVertical: 22,
    borderRadius: 16,
    marginTop: 50,
    marginBottom: 25,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  selectButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1B1B1B',
    fontFamily: 'Mont',
  },
});

export default styles;