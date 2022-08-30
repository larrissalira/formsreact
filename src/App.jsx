import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from './components/Menu/Menu'
import Home from "./Pages/Home/Home"
import Cadastro from "./Pages/Cadastro/Cadastro"
import S from "./App.css"

function App() {

  return (
    <BrowserRouter>
      <div className={S.divPrincipal}>
        <Menu/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
