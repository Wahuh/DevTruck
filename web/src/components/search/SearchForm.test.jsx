import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchForm from './SearchForm'

test('user can toggle the remote checkbox', () => {
  render(<SearchForm />)
  const checkbox = screen.getByLabelText('Remote')

  // unchecked by default
  expect(checkbox).not.toBeChecked()

  // toggle on
  userEvent.click(checkbox)
  expect(checkbox).toBeChecked()

  // toggle off
  userEvent.click(checkbox)
  expect(checkbox).not.toBeChecked()
})
