import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders search button', () => {
  render(<App />);
  const btn = screen.getByText(/Call Api/i);
  expect(btn).toBeInTheDocument();
});

test('button does things', async () => {
  const expectedText = 'foo'

  render(<App />);
  const textBefore = screen.queryByText(expectedText)
  expect(textBefore).not.toBeInTheDocument()

  const btn = screen.getByText(/Call Api/i);
  fireEvent.click(btn)


  const textAfter = await screen.findByText(expectedText)

  expect(textAfter).toBeInTheDocument()
});