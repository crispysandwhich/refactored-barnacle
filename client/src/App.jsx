import { Outlet } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage.jsx'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'

import Footer  from './components/footer/Footer.jsx'

function App() {


  return (
    <>
      <Navbar />
      
      <div>
        <Outlet />
      </div>

      <Footer />
      
    </>
  )
}

export default App
