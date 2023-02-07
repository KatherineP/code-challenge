import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '.'

test('renders Photos title', () => {
  render(<Header onTabClick={jest.fn()} tabName='favorited' />)
  expect(screen.getByText(/photos/i)).toBeInTheDocument()
})

test('renders Tabs', () => {
  render(<Header onTabClick={jest.fn()} tabName='favorited' />)
  const firstTab = screen.getByLabelText('Favorited')
  const secondTab = screen.getByLabelText('Recently Added')
  expect(firstTab).toBeInTheDocument()
  expect(secondTab).toBeInTheDocument()
})
