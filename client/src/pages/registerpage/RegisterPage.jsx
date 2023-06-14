import  { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCredentials } from '../../redux/authSlice.js'
import { useRegisterMutation } from '../../redux/userApiSlice.js'
import {toast} from 'react-toastify'
import classes from './registerpage.module.css'

export default function RegisterPage() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [register, {isLoading}] = useRegisterMutation()

  const { userInfo } = useSelector((state) => state.auth)

  useEffect(() => {
    if(userInfo){
      navigate('/')
    }
  },[userInfo, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(username === "" || email === "" || password === "") return

    try {
      const res = await register({username, email, password}).unwrap()
      dispatch(setCredentials({...res}))
      navigate('/')
    } catch (error) {
      toast.error(error?.data?.message || error.error)
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
