import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass'

const Badge = ({ count }) => {
  return (
    <Box
      as='span'
      sx={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderRadius: '50%',
        backgroundColor: '#623CEA',
        transform: 'translate(50%,25%)',
        height: 16,
        width: 16,
        zIndex: 2,
        color: 'white',
        fontSize: 11,
      }}
    >
      {count}
    </Box>
  )
}

Badge.propTypes = {}

export default Badge
