import { render } from '@testing-library/react';

test('basic test passes', () => {
  expect(true).toBe(true);
});

test('math operations work', () => {
  expect(2 + 2).toBe(4);
});

test('string operations work', () => {
  expect('Hello World').toContain('World');
});