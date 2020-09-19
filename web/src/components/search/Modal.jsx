import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Text } from 'rebass'
import TechFilter from './TechFilter'

const Modal = ({ children }) => {
  return (
    <Flex
      flexDirection='column'
      sx={{
        position: 'absolute',
        backgroundColor: 'rgb(0, 0, 0, 0.8)',
        height: '100%',
        minHeight: '100%',
        width: '100%',
        zIndex: 2,
      }}
    >
      <Flex
        flexDirection='column'
        sx={{ backgroundColor: 'white', padding: '0.5rem 1rem' }}
      >
        {children}
        {/* <Flex>Clear filters done</Flex> */}
      </Flex>
    </Flex>
  )
}

Modal.propTypes = {}

export default Modal
