import { Form, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../redux/slices/userApiSlice";
import { setCredentials } from "../redux/slices/authSlice";
import {toast} from 'react-toastify'

import '../styles/LoginPage.css'

export default function LoginPage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  // Dispatches the actions
  const dispatch = useDispatch()


  const [login, {isLoading}] = useLoginMutation()

  // calls the global state
  const { userInfo } = useSelector((state) => state.auth)


  useEffect(() => {
    if(userInfo){
      navigate('/')
    }
  },[userInfo, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // uses the login function mutation from redux store to call our server
      const res = await login({email, password}).unwrap()
      // Sets to local storage and our state
      dispatch(setCredentials({...res}))
      navigate('/')
    } catch (error) {
      toast.error(error?.data?.message || error.error)
    }
  }



  return (
    <div id="LoginPage">
      <div className="content">
        <h2>Login</h2>

        <Form onSubmit={handleSubmit}>
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
            <span>Password:</span>
            <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">submit</button>
          <p>Dont have an account, <Link to="/register">Register</Link> instead</p>
        </Form>
      </div>


    </div>
  )
}
