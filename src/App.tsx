import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CommonLayout from './features/generic/CommonLayout'
import TopPage from './pages/TopPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CommonLayout />} >
          <Route path="/" element={<TopPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
