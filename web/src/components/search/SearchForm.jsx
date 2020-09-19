import React, { useReducer } from 'react'
import { Flex } from 'rebass'
import SearchBox from './SearchBox'
import { Checkbox, Label } from '@rebass/forms'

const initialState = {
  isRemote: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_REMOTE':
      return { ...state, isRemote: action.payload }
    default:
      throw new Error()
  }
}

const SearchForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleRemote = () =>
    dispatch({ type: 'TOGGLE_REMOTE', payload: !state.isRemote })

  return (
    <Flex as='form' flexDirection='column'>
      <Flex padding='1rem' pb='0.5rem'>
        <SearchBox />
      </Flex>

      <Flex as='fieldset' sx={{ border: 0, px: '1rem', py: '0' }}>
        <Label
          htmlFor='remote'
          sx={{
            fontSize: 14,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Checkbox
            id='remote'
            name='remote'
            checked={state.isRemote}
            onChange={toggleRemote}
            sx={{}}
          />{' '}
          Remote
        </Label>
      </Flex>
    </Flex>
  )
}

SearchForm.propTypes = {}

export default SearchForm
