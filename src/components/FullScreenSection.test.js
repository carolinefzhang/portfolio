import React from 'react';
import FullScreenSection from './FullScreenSection';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock Chakra UI components
jest.mock('@chakra-ui/react', () => ({
  Box: ({ children, ...props }) => <div {...props}>{children}</div>,
  VStack: ({ children, ...props }) => <div {...props}>{children}</div>,
}));

const mockProps = {
  children: <div>Test Content</div>,
  isDarkBackground: false
};

test('FullScreenSection renders without crashing', () => {
  const { container } = render(<FullScreenSection {...mockProps} />);
  expect(container).toBeInTheDocument();
});

test('FullScreenSection renders children content', () => {
  const { getByText } = render(<FullScreenSection {...mockProps} />);
  const content = getByText('Test Content');
  expect(content).toBeInTheDocument();
});

test('FullScreenSection handles dark background prop', () => {
  const darkProps = { ...mockProps, isDarkBackground: true };
  const { container } = render(<FullScreenSection {...darkProps} />);
  expect(container).toBeInTheDocument();
});