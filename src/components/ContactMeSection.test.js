import React from 'react';
import ContactMeSection from './ContactMeSection';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock Chakra UI components
jest.mock('@chakra-ui/react', () => ({
  Box: ({ children, ...props }) => <div {...props}>{children}</div>,
  VStack: ({ children, ...props }) => <div {...props}>{children}</div>,
  Heading: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
  FormControl: ({ children, ...props }) => <div {...props}>{children}</div>,
  FormLabel: ({ children, ...props }) => <label {...props}>{children}</label>,
  Input: (props) => <input {...props} />,
  Textarea: (props) => <textarea {...props} />,
  Select: ({ children, ...props }) => <select {...props}>{children}</select>,
  Button: ({ children, ...props }) => <button {...props}>{children}</button>,
  FormErrorMessage: ({ children, ...props }) => <div {...props}>{children}</div>,
}));

// Mock Formik
jest.mock('formik', () => ({
  Formik: ({ children, initialValues }) => children({ values: initialValues, errors: {}, touched: {} }),
  Form: ({ children, ...props }) => <form {...props}>{children}</form>,
  Field: ({ children, name }) => children({ field: { name }, form: { errors: {}, touched: {} } }),
  useFormik: () => ({
    values: {},
    errors: {},
    touched: {},
    handleChange: jest.fn(),
    handleBlur: jest.fn(),
    handleSubmit: jest.fn(),
    isSubmitting: false,
    getFieldProps: jest.fn(() => ({ name: '', value: '', onChange: jest.fn(), onBlur: jest.fn() })),
  }),
}));

// Mock alert context
jest.mock('../context/alertContext', () => ({
  useAlertContext: () => ({
    onOpen: jest.fn(),
    onClose: jest.fn(),
    isOpen: false,
    type: 'success',
    message: ''
  })
}));

test('ContactMeSection renders without crashing', () => {
  const { container } = render(<ContactMeSection />);
  expect(container).toBeInTheDocument();
});

test('ContactMeSection contains contact heading', () => {
  const { getByText } = render(<ContactMeSection />);
  const heading = getByText(/contact/i);
  expect(heading).toBeInTheDocument();
});

test('ContactMeSection contains form fields', () => {
  const { container } = render(<ContactMeSection />);
  const form = container.querySelector('form');
  expect(form).toBeInTheDocument();
  
  const inputs = container.querySelectorAll('input');
  expect(inputs.length).toBeGreaterThan(0);
});

test('ContactMeSection contains submit button', () => {
  const { getByRole } = render(<ContactMeSection />);
  const submitButton = getByRole('button');
  expect(submitButton).toBeInTheDocument();
});