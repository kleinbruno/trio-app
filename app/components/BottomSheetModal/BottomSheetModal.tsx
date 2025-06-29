import React, {
  useCallback,
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
} from 'react';
import {
  BottomSheetModal as GorhomBottomSheetModal,
  BottomSheetView,
  BottomSheetBackdrop,
  BottomSheetBackgroundProps,
} from '@gorhom/bottom-sheet';
import { View } from 'react-native';

export interface BottomSheetModalProps {
  children: ReactNode;
  onDismiss?: () => void;
  snapPoints: Array<number | string>;
  backgroundColor?: string;
}

const BottomSheetModal: ForwardRefRenderFunction<
  GorhomBottomSheetModal,
  BottomSheetModalProps
> = ({ children, onDismiss, snapPoints, backgroundColor = 'white' }, ref) => {
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  const renderBackground = useCallback(
    (props: BottomSheetBackgroundProps) => (
      <View
        {...props}
        style={[
          props.style,
          { backgroundColor },
        ]}
      />
    ),
    [backgroundColor]
  );

  return (
    <GorhomBottomSheetModal
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      onDismiss={onDismiss}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
      backgroundComponent={renderBackground}
    >
      <BottomSheetView>{children}</BottomSheetView>
    </GorhomBottomSheetModal>
  );
};

export default forwardRef(BottomSheetModal);