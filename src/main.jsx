import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        {/* <Route path="/cadastro" element={<Cadastro />}></Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
