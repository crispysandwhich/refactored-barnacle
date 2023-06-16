import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.js'

import App from './App'
import Login from './pages/loginpage/LoginPage.jsx'
import Register from './pages/registerpage/RegisterPage.jsx'
import HomePage from './pages/homepage/HomePage.jsx'
import CreatePage from './pages/createpage/CreatePage.jsx'
import ErrorPage from './pages/errorpage/error-page.jsx'
import Profile from './pages/profilepage/ProfilePage.jsx'

// PrivateRoute
import PrivateRoute from './components/PrivateRoute.jsx'
import BlogPage from './pages/blogpage/BlogPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      {
        path: "/create",
        element: <CreatePage />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile /></PrivateRoute>
      },
      {
        path: '/blogDetails/:id',
        element: <BlogPage />
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
