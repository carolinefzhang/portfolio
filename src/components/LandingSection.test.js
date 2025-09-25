import React from 'react';
import LandingSection from './LandingSection';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock Chakra UI components
jest.mock('@chakra-ui/react', () => ({
  Box: ({ children, ...props }) => <div {...props}>{children}</div>,
  HStack: ({ children, ...props }) => <div {...props}>{children}</div>,
  VStack: ({ children, ...props }) => <div {...props}>{children}</div>,
  Heading: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
  Text: ({ children, ...props }) => <p {...props}>{children}</p>,
  Avatar: ({ src, name, ...props }) => <img src={src} alt={name} {...props} />,
}));

test('LandingSection renders without crashing', () => {
  const { container } = render(<LandingSection />);
  expect(container).toBeInTheDocument();
});

test('LandingSection contains greeting text', () => {
  const { getByText } = render(<LandingSection />);
  const greeting = getByText(/hello/i);
  expect(greeting).toBeInTheDocument();
});

test('LandingSection contains name', () => {
  const { container } = render(<LandingSection />);
  const nameElement = container.querySelector('h1');
  expect(nameElement).toBeInTheDocument();
});

test('LandingSection contains avatar image', () => {
  const { container } = render(<LandingSection />);
  const avatar = container.querySelector('img');
  expect(avatar).toBeInTheDocument();
  expect(avatar).toHaveAttribute('src');
});

test('LandingSection contains bio text', () => {
  const { container } = render(<LandingSection />);
  const bioText = container.querySelector('p');
  expect(bioText).toBeInTheDocument();
});