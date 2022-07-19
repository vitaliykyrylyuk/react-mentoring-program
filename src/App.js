import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Search from './Pages/Search'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <div className="flex flex-col h-[calc(100vh_+_1px)]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/search" replace />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:searchQuery" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
