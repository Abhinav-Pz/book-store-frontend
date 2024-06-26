import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'

import "@fortawesome/fontawesome-free/css/all.min.css";
import AuthProvider from './contexts/AuthProvider.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </Provider>
  </React.StrictMode>,
)
