import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCredentials } from '../redux/slices/authSlice.js'
import { useLogoutMutation } from '../redux/slices/userApiSlice.js'
import { Link, useNavigate } from 'react-router-dom'

import '../styles/MainHeader.css'

export default function MainHeader() {

  const [showModal, setShowModal] = useState(false)
  const { userInfo } = useSelector((state) => state.auth)


  const navigate = useNavigate()
  // Dispatches the actions
  const dispatch = useDispatch()

  const [logout] = useLogoutMutation()

  const handleLogout = async () => {
    try {
      // Calls the server to logout
      await logout().unwrap()
      // calls the removecreditntials slice to destory local storage
      dispatch(removeCredentials())
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <header id="mainHeader">

      <nav id="headerNav" >
        <h1><Link to="/">ghostieve</Link></h1>
        <ul>
          <li>
            <Link to="/blogs">blogs</Link>
          </li>
          <li>
            <Link to="/contacts">contacts</Link>
          </li>
        </ul>
      </nav>

      {
        !userInfo ? (
          <div id="headerControl">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        ) : (
          <div className='profile_tab' onClick={() => setShowModal(!showModal)} >
            <span>{userInfo.username}</span>
            <img src="https://placehold.co/20" alt="user profile" />
            {/* <AiOutlineArrowDown /> */}
            {
              showModal && (
                <div className='modal'>
                  <Link to="/create">Create</Link>
                  <Link to="/profile">profile</Link>
                  <Link onClick={handleLogout}>Logout</Link>
                </div>
              )
            }
          </div>
        )
      }


    </header>
  )
}

