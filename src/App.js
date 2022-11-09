import React from 'react'
import './App.css'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UpdatePassword from './components/UpdatePassword'
import ResetPassword from './components/ResetPassword'
import FinalPage from './components/FinalPage'
import Logo from './components/Logo'

function App() {
  return (
    <div>
      <Logo />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/update' element={<UpdatePassword />} />
          <Route path='/reset' element={<ResetPassword />} />
          <Route path='/success-page' element={<FinalPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App