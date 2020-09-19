import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'rebass'
import Tag from './Tag'

const TagList = ({ tags, onFilter }) => {
  return (
    <Flex>
      {tags.map((tag) => (
        <Tag onFilter={onFilter} name={tag} />
      ))}
    </Flex>
  )
}

TagList.propTypes = {}

export default TagList
