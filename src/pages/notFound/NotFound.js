import React from "react"
import { Link } from "react-router-dom"
import useTitle from "../../hooks/useTitle"

const NotFound = () => {
  useTitle("TIMGAD. | 404")
  return (
    <div>
      page not found go back to {"--->"} <Link to="/"> home page </Link>
    </div>
  )
}

export default NotFound
