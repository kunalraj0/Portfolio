import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page without crashing', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/kunalraj singh/i);
  expect(nameElements.length).toBeGreaterThan(0);
});
