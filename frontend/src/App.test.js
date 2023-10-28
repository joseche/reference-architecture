import { render, screen } from '@testing-library/react';
import App from './App';

test('renders life expectancy somewhere', () => {
  render(<App />);
  const textElement = screen.getByText(/life expectancy/i);
  expect(textElement).toBeInTheDocument();
});
