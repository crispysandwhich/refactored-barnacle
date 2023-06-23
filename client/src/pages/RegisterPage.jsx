import { useState, useEffect } from 'react'
import { Form, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../redux/slices/authSlice';
import { useRegisterMutation } from '../redux/slices/userApiSlice';
import { toast } from 'react-toastify';

import '../styles/RegisterPage.css'

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
    <div id="RegisterPage">
      
      <div className="content2">
        <h2>Register</h2>

        <Form onSubmit={handleSubmit}>
          <label htmlFor="username"> 
            <span>Username:</span>
            <input 
              type="text" 
              placeholder="enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
          </label>
          <label htmlFor="email"> 
            <span>Email:</span>
            <input 
              type="email" 
              placeholder="enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
          </label>
          <label htmlFor="password"> 
            <span>password:</span>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
          </label>
          <button type="submit">submit</button>
          <p>Already have an account, <Link to="/login">Login</Link> instead</p>
        </Form>
      </div>

    </div>
  )
}
