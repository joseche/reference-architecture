import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders life expectancy somewhere', () => {
  render(<App />);
  const textElement = screen.getAllByText(/life expectancy/i)[0];
  expect(textElement).toBeInTheDocument();
});
