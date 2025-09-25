import React from 'react';
import Card from './Card';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock Chakra UI components
jest.mock('@chakra-ui/react', () => ({
  Box: ({ children, ...props }) => <div {...props}>{children}</div>,
  HStack: ({ children, ...props }) => <div {...props}>{children}</div>,
  VStack: ({ children, ...props }) => <div {...props}>{children}</div>,
  Heading: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
  Text: ({ children, ...props }) => <p {...props}>{children}</p>,
  Image: ({ src, alt, ...props }) => <img src={src} alt={alt} {...props} />,
}));

const mockProps = {
  title: 'Test Project',
  description: 'Test project description',
  imageSrc: 'test-image.jpg'
};

test('Card renders without crashing', () => {
  const { container } = render(<Card {...mockProps} />);
  expect(container).toBeInTheDocument();
});

test('Card displays title', () => {
  const { getByText } = render(<Card {...mockProps} />);
  const title = getByText('Test Project');
  expect(title).toBeInTheDocument();
});

test('Card displays description', () => {
  const { getByText } = render(<Card {...mockProps} />);
  const description = getByText('Test project description');
  expect(description).toBeInTheDocument();
});

test('Card displays image with correct src', () => {
  const { container } = render(<Card {...mockProps} />);
  const image = container.querySelector('img');
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', 'test-image.jpg');
});