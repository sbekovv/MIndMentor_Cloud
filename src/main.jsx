import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {createGlobalStyle} from "styled-components";


const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Bai Jamjuree', sans-serif;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Global/>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
)
