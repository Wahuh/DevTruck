import React from 'react'
import PropTypes from 'prop-types'
import { Text, Flex } from 'rebass'

const Result = (props) => {
  return (
    <Flex px='1rem'>
      <Text fontSize={14}>
        <Text as='span' fontWeight={700}>
          4 jobs
        </Text>{' '}
        for search term
      </Text>
    </Flex>
  )
}

Result.propTypes = {}

export default Result
