import React from "react"
import Loader from "../../../components/Loader"
import useAuth from "../../../hooks/useAuth"
import { useGetUsersQuery } from "../../users/usersApiSlice"
import UserForm from "./UserForm"

const UserPage = () => {
  const { id } = useAuth()
  const { user } = useGetUsersQuery("users", {
    selectFromResult: ({ data }) => ({
      user: data?.entities[id],
    }),
  })

  if (!user) return <Loader />

  return <UserForm user={user} />
}

export default UserPage
