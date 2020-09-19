import React, { useRef, useState } from 'react'
import { Input } from '@rebass/forms'
import { Box, Button, Flex } from 'rebass'
import SearchIcon from '../icons/SearchIcon'
import XIcon from '../icons/XIcon'

const SearchBox = () => {
  const inputElement = useRef(null)
  const [isFocused, setIsFocused] = useState(false)
  const [query, setQuery] = useState('')

  const handleChange = ({ currentTarget: { value } }) => setQuery(value)
  const handleClick = () => {
    setQuery('')
    // return focus to input after clicking clear button
    inputElement.current.focus()
  }
  const handleFocus = () => setIsFocused(!isFocused)

  return (
    <Flex
      flex={1}
      sx={{
        backgroundColor: '#F0F4F8',
        boxShadow: isFocused && '0px 0px 0px 2px orange',
        borderRadius: 4,
      }}
    >
      <Flex pl='1rem' py='0.5rem' pr='0.5rem' alignItems='center'>
        <SearchIcon />
      </Flex>
      <Input
        autoComplete='off'
        placeholder='Search for job titles'
        name='query'
        value={query}
        onBlur={handleFocus}
        onChange={handleChange}
        onFocus={handleFocus}
        ref={inputElement}
        sx={{
          pt: '0.5rem',
          pr: 0,
          pl: 0,
          borderRadius: 4,
          border: 'none',
          outline: 'none',
          lineHeight: 1.7,
        }}
      />
      <Flex
        pr='1rem'
        py='0.5rem'
        pl='0.5rem'
        alignItems='center'
        flex='0 0 auto'
      >
        {query ? (
          <Button onClick={handleClick} padding={0}>
            <XIcon />
          </Button>
        ) : (
          <Box size={24} />
        )}
      </Flex>
    </Flex>
  )
}

export default SearchBox
