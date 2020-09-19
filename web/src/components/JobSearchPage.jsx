import React from 'react'
import { Flex } from 'rebass'
import SearchBox from './SearchBox'

const JobSearchPage = () => {
  return (
    <Flex flexDirection='column'>
      <Flex flexDirection='column'>
        <Flex padding='1rem' pb='0.5rem'>
          <SearchBox />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default JobSearchPage
