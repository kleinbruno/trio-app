import 'react-native';

import 'react-native-gesture-handler/jestSetup';
import 'react-native-reanimated';

jest.useFakeTimers();

declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle
  let __TEST__: any;
}

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('@gorhom/bottom-sheet', () => ({
  BottomSheetModal: () => null,
  BottomSheetModalProvider: ({ children }: any) => children,
  BottomSheetView: ({ children }: any) => children,
  BottomSheetBackdrop: () => null,
}));

// https://github.com/facebook/react-native/issues/51993
jest.mock('react-native/Libraries/Components/RefreshControl/RefreshControl', () => ({
  __esModule: true,
  default: require('../__mocks__/RefreshControlMock.js'),
}));
