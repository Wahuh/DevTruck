import React from 'react'
import PropTypes from 'prop-types'
import { Text, Link as RebassLink, Flex, Box } from 'rebass'
import { Link } from 'react-router-dom'

const HomePage = (props) => {
  return (
    <Flex flexDirection='column' justifyContent='center' alignItems='center'>
      <Text
        textAlign='center'
        color='#283039'
        fontSize={20}
        pt='10vh'
        pb='1rem'
        px='5vw'
      >
        <Text as='span' fontWeight={700} color=''>
          Dev
        </Text>
        <Text as='span' fontWeight={700}>
          Truck
        </Text>{' '}
        aggregates developer job search results from the other sites saving you
        the hassle. All aboard the truck{' '}
        <Text as='span' aria-label='Truck emoji' role='img'>
          {String.fromCodePoint('0x1F69A')}
        </Text>{' '}
        to find your next destination! (UK only)
      </Text>

      <RebassLink
        css
        to={{ pathname: '/jobs' }}
        as={Link}
        sx={{
          borderRadius: 4,
          backgroundColor: '#A61B1B',
          color: 'white',
          px: '1rem',
          py: '0.5rem',
          textDecoration: 'none',
        }}
      >
        <Box as='span' mr='0.25rem'>
          Let's go
        </Box>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
          width='16'
          height='16'
        >
          <path
            fill-rule='evenodd'
            d='M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z'
          ></path>
        </svg>
      </RebassLink>

      {/* <Text>
        If you found this project useful, feel free to drop a star on GitHub.
      </Text>

      <Text>Or if you're feeling super generous, buy me a coffee</Text> */}
    </Flex>
  )
}

HomePage.propTypes = {}

export default HomePage
