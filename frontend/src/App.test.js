import { render, screen } from '@testing-library/react';
import App from './App';

test('renders reference architecture somewhere', () => {
  render(<App />);
  const textElement = screen.getByText(/reference architecture/i);
  expect(textElement).toBeInTheDocument();
});
