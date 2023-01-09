import { Outlet } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { useRefreshMutation } from "../authApiSlice"
import { useSelector } from "react-redux"
import { selectCurrentToken } from "../authSlice"
import Loader from "../../../components/Loader"

const PersistLogin = () => {
  const token = useSelector(selectCurrentToken)
  const effectRan = useRef(false)

  const [trueSuccess, setTrueSuccess] = useState(false)

  const [refresh, { isUninitialized, isLoading, isSuccess }] =
    useRefreshMutation()

  useEffect(() => {
    if (effectRan.current === true || process.env.NODE_ENV !== "development") {
      const verifyRefreshToken = async () => {
        // console.log("verify refresh token")
        try {
          await refresh()
          setTrueSuccess(true)
        } catch (err) {
          console.error(err)
        }
      }
      if (!token) verifyRefreshToken()
    }

    return () => (effectRan.current = true)
    // eslint-disable-next-line
  }, [])

  let content
  if (isLoading) {
    console.log("loading")
    content = <Loader />
  } else if (isSuccess && trueSuccess) {
    console.log("success")
    content = <Outlet />
  } else if (token && isUninitialized) {
    console.log("token and uninitialized")
    console.log(isUninitialized)
    content = <Outlet />
  } else {
    content = <Outlet />
  }

  return content
}

export default PersistLogin
