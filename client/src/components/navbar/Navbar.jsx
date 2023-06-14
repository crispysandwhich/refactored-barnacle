import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCredentials } from '../../redux/authSlice.js'
import { useLogoutMutation } from '../../redux/userApiSlice.js'
import classes from './navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {

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
    <div className={classes.container}>

      <div className={classes.wrapper}>
        
        <Link to='/'>deBlog</Link>

        <ul className={classes.navList}>
          <li className={classes.navListItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={classes.navListItem}>
            <Link to="/about">About</Link>
          </li>
          <li className={classes.navListItem}>
            <Link to="/contacts">contacts</Link>
          </li>
          <li className={classes.navListItem}>
            <Link to="/categories">catergories</Link>
          </li>
        </ul>

        {
          !userInfo ? (
            <div>
              <Link to="/login">login</Link>
              <Link to="/register">register</Link>
            </div>
          ) : (
            <div className={classes.profile_tab} >
              <span>{userInfo.username}</span>
              <img onClick={() => setShowModal(!showModal)} src={userInfo.profileImg} alt="user profile" />
              {
                showModal && (
                  <div className={classes.modal}>
                    <Link to="/create">Create</Link>
                    <Link to="/profile">Create</Link>
                    <Link onClick={handleLogout}>LOgout</Link>
                  </div>
                )
              }
            </div>
          )
        }


      </div>

    </div>
  )
}
