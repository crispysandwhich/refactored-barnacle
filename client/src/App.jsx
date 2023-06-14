import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Footer  from './components/footer/Footer.jsx'

function App() {


  return (
    <>
      <Navbar />
      <ToastContainer />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
