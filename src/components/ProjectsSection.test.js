import React from 'react';
import ProjectsSection from './ProjectsSection';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock Chakra UI components
jest.mock('@chakra-ui/react', () => ({
  Box: ({ children, ...props }) => <div {...props}>{children}</div>,
  HStack: ({ children, ...props }) => <div {...props}>{children}</div>,
  VStack: ({ children, ...props }) => <div {...props}>{children}</div>,
  Heading: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
  SimpleGrid: ({ children, ...props }) => <div {...props}>{children}</div>,
}));

jest.mock('./Card', () => ({ title, description, imageSrc }) => (
  <div data-testid="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <img src={imageSrc} alt={title} />
  </div>
));

test('ProjectsSection renders without crashing', () => {
  const { container } = render(<ProjectsSection />);
  expect(container).toBeInTheDocument();
});

test('ProjectsSection contains section heading', () => {
  const { getByText } = render(<ProjectsSection />);
  const heading = getByText(/projects/i);
  expect(heading).toBeInTheDocument();
});

test('ProjectsSection renders project cards', () => {
  const { getAllByTestId } = render(<ProjectsSection />);
  const projectCards = getAllByTestId('project-card');
  expect(projectCards.length).toBeGreaterThan(0);
});