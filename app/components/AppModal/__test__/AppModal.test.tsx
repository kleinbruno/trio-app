import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { render, screen } from '@testing-library/react-native';
import AppModal from '../';

describe('AppModal component', () => {
  it('should be visible when visible is true', () => {
    render(
      <AppModal
        visible={true}
        title="Test Modal"
        description="This is a test"
        onClose={jest.fn()}
      >
        <></>
      </AppModal>
    );

    expect(screen.getByTestId('app-modal-container')).toBeVisible();
    expect(screen.getByText('Test Modal')).toBeTruthy();
    expect(screen.getByText('This is a test')).toBeTruthy();
  });

  it('should not render modal content when visible is false', () => {
    render(
      <AppModal
        visible={false}
        title="Test Modal"
        description="This is a test"
        onClose={jest.fn()}
      >
        <></>
      </AppModal>
    );

    expect(screen.queryByTestId('app-modal-container')).toBeNull();
  });
});