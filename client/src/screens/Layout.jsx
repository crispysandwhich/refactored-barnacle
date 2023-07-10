
import { Outlet } from 'react-router-dom'
import MainHeader from '../components/MainHeader'
import MainFooter from '../components/MainFooter'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import '../styles/layout.css' 

export default function Layout() {
  return (
    <div id="layout">
      <MainHeader />
      <ToastContainer />
      <div id="outlet">
        <Outlet />
      </div>
      <MainFooter />
    </div> 
  )
} 
