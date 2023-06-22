import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCredentials } from '../../redux/authSlice.js'
import { useLogoutMutation } from '../../redux/userApiSlice.js'
import classes from './header.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineArrowDown } from 'react-icons/ai'

export default function Navbar() {

  const [showModal, setShowModal] = useState(false)
  const { userInfo } = useSelector((state) => state.auth)

  // console.log(userInfo)

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

        <div className={classes.left}>
          <Link to='/' className={classes.logo}>deBlog</Link>

          <ul className={classes.navList}>
            <li className={classes.navListItem}>
              <Link to="/about">About</Link>
            </li>
            <li className={classes.navListItem}>
              <Link to="/blogs">blogs</Link>
            </li>
            <li className={classes.navListItem}>
              <Link to="/categories">catergories</Link>
            </li>
          </ul>
        </div>
        

        {
          !userInfo ? (
            <div className={classes.controlPan}>
              <Link to="/login">login</Link>
              <Link to="/register">register</Link>
            </div>
          ) : (
            <div className={classes.profile_tab} onClick={() => setShowModal(!showModal)} >
              <span>{userInfo.username}</span>
              <img src="https://placehold.co/20" alt="user profile" />
              <AiOutlineArrowDown />
              {
                showModal && (
                  <div className={classes.modal}>
                    <Link to="/create">Create</Link>
                    <Link to="/profile">profile</Link>
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
