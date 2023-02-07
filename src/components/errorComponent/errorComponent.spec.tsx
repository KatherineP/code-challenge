import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ErrorComponent from '.'

test('renders error message', () => {
  render(<ErrorComponent errorMessage='Oops! Something went wrong.' />)
  expect(screen.getByText('Oops! Something went wrong.')).toBeVisible()
})
