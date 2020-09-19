import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'rebass'
import JobItem from './JobItem'

const job = {
  company: 'DigitalOcean',
  title: 'Sr. Back-end Developer',
  location: 'London',
  technologies: ['C++', 'Node.js', 'Javascript', 'Docker', 'Golang', 'Rust'],
}

const JobList = (props) => {
  return (
    <Flex
      as='ul'
      flexDirection='column'
      sx={{
        py: '1.5rem',
        px: '1rem',
      }}
    >
      <JobItem job={job} />
      <JobItem job={job} />
      <JobItem job={job} />
      <JobItem job={job} />
      <JobItem job={job} />
      <JobItem job={job} />
      <JobItem job={job} />
      <JobItem job={job} />
      <JobItem job={job} />
      <JobItem job={job} />
      <JobItem job={job} />
      <JobItem job={job} />
      <JobItem job={job} />
    </Flex>
  )
}

JobList.propTypes = {}

export default JobList
