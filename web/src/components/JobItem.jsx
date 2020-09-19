import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Text } from 'rebass'
import LocationIcon from './icons/LocationIcon'

const JobItem = ({ job }) => {
  const { title, company, location, technologies } = job
  return (
    <Flex mb='1rem' sx={{ borderBottom: '1px solid #dfe6e9', pb: '1rem' }}>
      <Flex pr='0.5rem'>
        <Flex
          alignItems='center'
          justifyContent='center'
          width={36}
          height={36}
          sx={{
            borderRadius: 10,
            backgroundColor: '#0984e3',
            color: 'white',
          }}
        >
          {company.charAt(0)}
        </Flex>
      </Flex>
      <Flex flex={1} flexDirection='column'>
        <Text color='#636e72' fontSize={14}>
          {company}
        </Text>
        <Text color='#2d3436' fontWeight={700}>
          {title}
        </Text>
        <Flex alignItems='center'>
          <Flex
            as='span'
            sx={{
              mr: '0.125rem',
              svg: {
                height: 14,
                width: 14,
                stroke: '#8896BA',
                fill: '#8896BA',
              },
            }}
          >
            <LocationIcon />
          </Flex>
          <Text fontSize={12} color='#8896BA'>
            {location}
          </Text>
        </Flex>
        <Flex justifyContent='space-between' alignItems='center'>
          <Flex flexWrap='wrap'>
            {technologies.map((tech) => (
              <Flex
                sx={{
                  mt: '0.25rem',
                  mr: '0.25rem',
                  padding: '0.25rem 0.5rem',
                  backgroundColor: '#DBEEFF',
                  borderRadius: 4,
                }}
              >
                <Text fontSize={12} color='#636e72'>
                  {tech}
                </Text>
              </Flex>
            ))}
          </Flex>
          <Text flex='none' color='#8896BA' alignSelf='flex-end' fontSize={12}>
            2 d
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

JobItem.propTypes = {}

export default JobItem
