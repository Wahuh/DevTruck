import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBox from './SearchBox'

test('user can type into the search box', async () => {
  render(<SearchBox />)
  const searchBox = screen.getByPlaceholderText('Search for job titles')
  await userEvent.type(searchBox, 'Senior Developer')
  expect(searchBox).toHaveValue('Senior Developer')
})

test('user can clear the search box by clicking on the X button', async () => {
  render(<SearchBox />)
  const searchBox = screen.getByPlaceholderText('Search for job titles')
  await userEvent.type(searchBox, 'Senior Developer')
  const xButton = screen.getByRole('button')
  userEvent.click(xButton)
  expect(searchBox).toHaveValue('')
})
