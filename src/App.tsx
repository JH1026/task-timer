import { useState } from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import CommonLayout from './features/generic/CommonLayout'
import TaskLayout from './features/generic/TaskLayout'
import TaskConfigPage from './pages/TaskConfigPage'
import TopPage from './pages/TopPage'
import { initStorage } from './utils/storage'

function App() {

  initStorage();

  return (
    <HashRouter>
      <Routes>
        <Route element={<CommonLayout />} >
          <Route path="/" element={<TopPage />} />
        </Route>
        <Route element={<TaskLayout />} >
          <Route path="/task-config" element={<TaskConfigPage />} />
          <Route path="/task-record" element={<TopPage />} />
          <Route path="/task-stats" element={<TopPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
