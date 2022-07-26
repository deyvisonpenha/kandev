import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { injectGlobal } from '@emotion/css'

injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Inter, sans-serif;
  }
`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
