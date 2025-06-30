import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  contentWrapper: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
  sectionTitle: {
    marginTop: 32,
    marginBottom: 10,
    fontSize: 25,
    fontWeight: '700',
  },
  footer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  button: {
    backgroundColor: '#1F49D1',
    paddingVertical: 16,
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default styles;