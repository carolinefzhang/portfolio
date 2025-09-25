import React from 'react';
import Header from '../components/Header';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock Chakra UI components
jest.mock('@chakra-ui/react', () => ({
  Box: ({ children, ...props }) => <div {...props}>{children}</div>,
  HStack: ({ children, ...props }) => <div {...props}>{children}</div>,
}));

test('Header component renders without crashing', () => {
  const { container } = render(<Header />);
  expect(container).toBeInTheDocument();
});

test('Header component contains social media links with correct URLs', () => {
  const { container } = render(<Header />);
  
  const githubLink = container.querySelector('a[href*="github.com"]');
  expect(githubLink).toBeInTheDocument();
  
  const linkedinLink = container.querySelector('a[href*="linkedin.com"]');
  expect(linkedinLink).toBeInTheDocument();
  
  const emailLink = container.querySelector('a[href^="mailto:"]');
  expect(emailLink).toBeInTheDocument();

});

test('Header component contains navigation links', () => {
  const { getByText } = render(<Header />);
  const projectsLink = getByText(/Projects/i);
  const contactMeLink = getByText(/Contact Me/i);
  expect(projectsLink).toBeInTheDocument();
  expect(contactMeLink).toBeInTheDocument();
});
