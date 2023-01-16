import { useSelector } from "react-redux"
import { useNavigate, Outlet, useParams } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import { selectCurrentToken } from "./authSlice"

const UserAuth = () => {
  const navigate = useNavigate()
  const { id: userId } = useParams()
  const token = useSelector(selectCurrentToken)
  const { id } = useAuth()
  if (!token) navigate("/")
  if (id === userId) {
    return <Outlet />
  } else navigate("/")
}

export default UserAuth
