import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PizzaContextProvider from './context/PizzaContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PizzaContextProvider>
     <App />
    </PizzaContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)