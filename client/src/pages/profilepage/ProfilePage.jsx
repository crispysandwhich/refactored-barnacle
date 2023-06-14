import  { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCredentials } from "../../redux/authSlice"
import { useUpdateUserMutation } from '../../redux/userApiSlice'
import { toast } from 'react-toastify'
import classes from './profilepage.module.css'

export default function ProfilePage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [profileImage, setProfileImage] = useState('')

  const dispatch = useDispatch()

  const [updateUser] = useUpdateUserMutation()

  const {userInfo} = useSelector((state) => state.auth)


  useEffect(() => {
    setUsername(userInfo.username)
    setEmail(userInfo.email)
    setProfileImage(userInfo.profileImg)
  }, [userInfo])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await updateUser({_id: userInfo._id, username, email, password, profileImage}).unwrap()
    dispatch(setCredentials({...res}))
    toast.success('profile updated successfully hoe')
  }

  return (
    <div>
      <div className={classes.container}>
        <h2>Profile Page</h2>
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
          <input
            type="text"
            placeholder='Profile Image'
            value={profileImage}
            onChange={(e) => setProfileImage(e.target.value)}
          />
          <button type="submit">Update</button>

        </form>
      </div>
    </div>
  )
}
