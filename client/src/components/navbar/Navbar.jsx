import { useState } from 'react'
import {useSelector } from 'react-redux'
import classes from './navbar.module.css'
import { Link } from 'react-router-dom'

import profileImg from '../../assets/tunukiNFT.png'

export default function Navbar() {

  const [showModal, setShowModal] = useState(false)
  const { userInfo } = useSelector((state) => state.auth)

  console.log(userInfo.username)


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

        <div className={classes.profile_tab} >
          {/* {} */}
          <img onClick={() => setShowModal(!showModal)} src={profileImg} alt="user profile" />
          {
            showModal && (
              <div className={classes.modal}>
                <Link to="/create">Create</Link>
                <span>LOgout</span>
              </div>
            )
          }
        </div>

      </div>

    </div>
  )
}
