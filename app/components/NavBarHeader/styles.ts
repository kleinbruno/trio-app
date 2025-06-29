import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1F49D1',
    height: 200,
    paddingHorizontal: 24,
    paddingTop: 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  headerSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    height: 60,
  },
  headerText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 34,
    fontFamily: 'Mont',
  },
  headerTextCentered: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
  },
backButton: {
  position: 'absolute',
  top: 0,
  left: 0,
  width: 40,
  height: 40,
  borderRadius: 15,
  backgroundColor: '#FFF',
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: 'rgba(255, 255, 255, 0.1)',
  zIndex: 10,
  marginLeft: 24,
  marginTop: 10
},
  backIcon: {
    width: 12,
    height: 12,
    tintColor: '#1A1A1A',
  },
});

export default styles;