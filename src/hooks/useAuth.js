import { useSelector } from "react-redux"
import { selectCurrentToken } from "../features/auth/authSlice"
import jwtDecode from "jwt-decode"

const useAuth = () => {
  const token = useSelector(selectCurrentToken)
  if (token) {
    const decoded = jwtDecode(token)
    const { id, email, isAdmin } = decoded.UserInfo
    return { id, email, isAdmin }
  }
  return { id: "", email: "", isAdmin: false }
}

export default useAuth
