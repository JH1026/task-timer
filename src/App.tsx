import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CommonLayout from './features/generic/CommonLayout'
import TaskLayout from './features/generic/TaskLayout'
import TaskConfigPage from './pages/TaskConfigPage'
import TopPage from './pages/TopPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CommonLayout />} >
          <Route path="/" element={<TopPage />} />
        </Route>
        <Route element={<TaskLayout />} >
          <Route path="/task-config" element={<TaskConfigPage />} />
          <Route path="/task-schedule" element={<TopPage />} />
          <Route path="/task-stats" element={<TopPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
