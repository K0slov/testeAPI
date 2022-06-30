import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1}}>
      <App />
    </div>
  </React.StrictMode>
)
