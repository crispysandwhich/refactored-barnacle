import React from 'react'
import {Link} from 'react-router-dom'
import classes from './loginpage.module.css'

export default function LoginPage() {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Login</h2>
        <form>
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <button type="submit">Sing  in</button>
        </form>
        <p>Dont have an account register <Link to='/register'>Here</Link></p>
      </div>
    </div>
  )
}
