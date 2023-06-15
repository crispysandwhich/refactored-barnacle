import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Footer  from './components/footer/Footer.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div id='outlet'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
