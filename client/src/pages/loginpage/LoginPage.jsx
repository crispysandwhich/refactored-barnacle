import {useState, useEffect} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation } from '../../redux/userApiSlice.js'
import { setCredentials } from '../../redux/authSlice.js'

import classes from './loginpage.module.css'

export default function LoginPage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [login, {isLoading}] = useLoginMutation()

  const { userInfo } = useSelector((state) => state.auth)

  useEffect(() => {
    if(userInfo){
      navigate('/')
    }
  },[userInfo, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // return and unwrap pormise
      const res = await login({email, password}).unwrap()
      dispatch(setCredentials({...res}))
      navigate('/')
    } catch (error) {
      console.log(error)
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
