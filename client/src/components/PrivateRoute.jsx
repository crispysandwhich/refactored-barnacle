import { Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'



export default function PrivateRoute({children}) {
  // Get user info
  const {userInfo} = useSelector((state) => state.auth)
  return userInfo ? children : <Navigate to="/login" replace />
}
