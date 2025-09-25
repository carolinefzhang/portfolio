import React from 'react';
import Alert from './Alert';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock alert context
jest.mock('../context/alertContext', () => ({
  useAlertContext: () => ({
    onOpen: jest.fn(),
    onClose: jest.fn(),
    isOpen: true,
    type: 'success',
    message: 'Operation completed successfully'
  })
}));

// Mock Chakra UI components
jest.mock('@chakra-ui/react', () => ({
  AlertDialog: ({ children, isOpen, ...props }) => isOpen ? <div {...props}>{children}</div> : null,
  AlertDialogOverlay: ({ children, ...props }) => <div {...props}>{children}</div>,
  AlertDialogContent: ({ children, ...props }) => <div {...props}>{children}</div>,
  AlertDialogHeader: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
  AlertDialogBody: ({ children, ...props }) => <div {...props}>{children}</div>,
}));

test('Alert renders without crashing', () => {
  const { container } = render(<Alert />);
  expect(container).toBeInTheDocument();
});

test('Alert displays title', () => {
  const { getByText } = render(<Alert />);
  const title = getByText('All good!');
  expect(title).toBeInTheDocument();
});

test('Alert displays description', () => {
  const { getByText } = render(<Alert />);
  const description = getByText('Operation completed successfully');
  expect(description).toBeInTheDocument();
});