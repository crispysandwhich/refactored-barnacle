import React, { useState } from 'react'
import classes from './registerpage.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { request } from '../../utils/api'

export default function RegisterPage() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate  = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(username === "" || email === "" || password === "") return

    try {
      const options = {"Content-Type": 'application/json'}
      const data =  await request('/api/users/', "POST", options, {username, email, password} )

      console.log(data)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
          <input 
            type="email" 
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <input 
            type="password" 
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">register</button>
          <p>Already have an account, <Link to="/login">Login</Link> instead</p>
        </form>
      </div>
    </div>
  )
}
