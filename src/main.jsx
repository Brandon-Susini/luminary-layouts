import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App Page={Home}/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
