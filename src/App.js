import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'

import Header from './components/Header/Header'
import JobLists from './components/Jobs/JobLists'
import JobDetails from './components/Job-Details/JobDetails'



function App() {
  return (
    <Router>
          <Header/>
          <Routes>
              <Route path={`/`} element={<Navigate to={`/jobs`} />} />
              <Route path={`/jobs`} element={<JobLists/>} />
              <Route path={`/jobs/:position`} element={<JobDetails/>} />
          </Routes>
    </Router>
  )
}

export default App
