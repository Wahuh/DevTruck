import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from 'rebass'

const Tag = ({ name, onFilter }) => {
  return (
    <Box
      sx={{
        border: '1px solid grey',
        borderRadius: 4,
        padding: '0.25rem 0.5rem',
        mr: '0.5rem',
      }}
      onClick={() => onFilter({ tech: [name] })}
    >
      <Text as='small' fontSize={14}>
        {name}
      </Text>
    </Box>
  )
}

Tag.propTypes = {}

export default Tag
