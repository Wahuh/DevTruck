import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'

const App = () => (
  <Router>
    <Routes>
      <Route element={<HomePage />} />
    </Routes>
  </Router>
)

export default App
