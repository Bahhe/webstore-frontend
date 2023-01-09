import React from "react"
import Loader from "../../../components/Loader"
import { useGetUserByIdQuery } from "../../users/usersApiSlice"
import { useParams } from "react-router-dom"
import UserForm from "./UserForm"

const UserPage = () => {
  const { id } = useParams()
  const { data: user } = useGetUserByIdQuery(id, {
    refetchOnMountOrArgChange: true,
  })

  if (!user) return <Loader />
  return <UserForm user={user} />
}

export default UserPage
