import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<App />}/>
              {/*<Route path='/checkout' element={<App />}/>*/}
              {/*<Route path='/basket' element={<App />}/>*/}
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)