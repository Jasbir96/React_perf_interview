//react testing
import { render, screen } from '@testing-library/react';
import App from './App';
// jest 
test('renders learn react link', () => {
  // 1. render 
  // i am rendering my app component in isolation 
  render(<App />);
// 2. get what you want
  // whether the ui contains learn react or not 
  const linkElement = screen.getByText(/learn react/i);
// 3. compare
  // jest -> compares 
  expect(linkElement).toBeInTheDocument();
});
