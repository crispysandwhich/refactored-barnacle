import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import store from './redux/store.js'
import { Provider } from 'react-redux'

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
  <Provider store={store} >
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </Provider>
)
