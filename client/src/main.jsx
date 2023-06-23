import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './redux/store.js'


import ErrorPage from './pages/error-page'
import BlogPage from './pages/BlogPage'
import ProfilePage from './pages/ProfilePage'
import Layout from './screens/Layout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import CreatePage from './pages/CreatePage.jsx'
import BlogDetailsPage from './pages/BlogDetailsPage.jsx'


const router = createBrowserRouter([
  { 
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      { 
        path: '/blogs',
        element: <BlogPage />
      },
      { 
        path: '/profile',
        element: <ProfilePage />
      },
      {
        path: '/contacts',
        element: <div>Contacts</div>
      },
      { 
        path: '/login',
        element: <LoginPage />
      },
      { 
        path: '/register',
        element: <RegisterPage />
      },
      { 
        path: '/create',
        element: <CreatePage />
      },
      { 
        path: '/blogDetails/:id',
        element: <BlogDetailsPage />
      }
    ]
  },
  { 
    path: '/deApp',
    element: <div>Small app</div>,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
