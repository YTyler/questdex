import { render, screen } from '@testing-library/react';
import App from './App';

test('displays page title', () => {
  render(<App />);
  const pageTitle = screen.getByText(/questdex/i);
  expect(pageTitle).toBeInTheDocument();
});

test('displays relevant information about current quests', () => {
  render(<App />);
  expect(screen.getByText(/number needed/i)).toBeInTheDocument();
  expect(screen.getByText(/related quests/i)).toBeInTheDocument();
  expect(screen.getByText(/notes/i)).toBeInTheDocument();
});
