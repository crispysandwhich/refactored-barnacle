import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter} from 'react-router-dom'

import App from './App'
import Login from './pages/loginpage/LoginPage.jsx'
import Register from './pages/registerpage/RegisterPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
