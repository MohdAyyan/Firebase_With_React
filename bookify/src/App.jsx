import { useState } from 'react'
import Login from './pages/Login.jsx'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register.jsx'
import HomePage from './pages/Home.jsx'
import List from './pages/List.jsx'

function App() {


  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/books/list" element={<List/>}/>
    </Routes>
  )
}

export default App
