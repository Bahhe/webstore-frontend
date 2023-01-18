import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import { useRefreshMutation } from "../authApiSlice"
import { useSelector } from "react-redux"
import { selectCurrentToken } from "../authSlice"

const PersistLogin = () => {
  const token = useSelector(selectCurrentToken)
  const [refresh, { isLoading, isSuccess }] = useRefreshMutation()

  useEffect(() => {
    const verifyRefreshToken = async () => {
      await refresh()
    }
    if (!token) verifyRefreshToken()
    // eslint-disable-next-line
  }, [])

  let content = <Outlet />
  if (isLoading) {
    console.log("loading")
  }
  if (isSuccess) {
    console.log("success")
  }
  return content
}

export default PersistLogin
