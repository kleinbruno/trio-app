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
  loadingWrapper: {
    marginTop: 20,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 16,
    fontSize: 14,
  },
  successOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  successContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    alignItems: 'center',
  },
  successTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  successSubtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
    textAlign: 'center',
  },
  successBikeWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
  successButton: {
    backgroundColor: '#1F49D1',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 24,
    width: '100%',
    alignItems: 'center',
  },
  successButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;