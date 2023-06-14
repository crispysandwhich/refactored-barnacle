import {useState, useEffect} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation } from '../../redux/userApiSlice.js'
import { setCredentials } from '../../redux/authSlice.js'
import {toast} from 'react-toastify'

import classes from './loginpage.module.css'

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
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder='email' 
            onChange={(e) => setEmail(e.target.value)}
            value={email} />
          <input 
            type="password" 
            placeholder='password' 
            onChange={(e) => setPassword(e.target.value)}
            value={password}

            />
          <button type="submit">Sing  in</button>
        </form>
        <p>Dont have an account register <Link to='/register'>Here</Link></p>
      </div>
    </div>
  )
}
