import React from 'react'
import { Flex } from 'rebass'
import JobList from './JobList'
import Result from './Result'
import SearchForm from './search/SearchForm'

const JobSearchPage = () => (
  <Flex flexDirection='column'>
    <SearchForm />
    <Result />
    <JobList />
  </Flex>
)

export default JobSearchPage
