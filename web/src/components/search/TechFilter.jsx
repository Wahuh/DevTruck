import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Text } from 'rebass'
import TagList from './TagList'
// import SearchBox from './search/SearchBox'

const TechFilter = ({ onFilter }) => {
  return (
    <Flex flexDirection='column'>
      {/* <SearchBox placeholder='Add a tech tag' /> */}
      <Text as='small'>Or pick a quick tag</Text>

      <Text fontSize={18} fontWeight={600} mb='0.75rem' mt='1rem'>
        Languages
      </Text>
      <TagList onFilter={onFilter} tags={['Node.js', 'C#', 'Javascript']} />

      <Text fontSize={18} fontWeight={600} mb='0.75rem' mt='1rem'>
        DevOps / Sysadmin
      </Text>
      <TagList onFilter={onFilter} tags={['Docker', 'Kubernetes']} />
    </Flex>
  )
}

TechFilter.propTypes = {}

export default TechFilter
