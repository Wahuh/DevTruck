import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import JobSearchPage from './JobSearchPage'

const App = () => (
  <Router>
    <Routes>
      <Route element={<HomePage />} />
      <Route path='jobs' element={<JobSearchPage />} />
    </Routes>
  </Router>
)

export default App
