import React from "react"
import { useParams } from "react-router-dom"
import { useGetUsersQuery } from "../../../features/users/usersApiSlice"
import EditUserForm from "./EditUserForm"
import PulseLoader from "react-spinners/PulseLoader"
import useTitle from "../../../hooks/useTitle"

const EditUserPage = () => {
  useTitle("BlackBeard. | Edit User")
  const { userId } = useParams()
  const { user } = useGetUsersQuery("users", {
    selectFromResult: ({ data }) => ({
      user: data?.entities[userId],
    }),
  })

  if (!user) return <PulseLoader />
  const content = <EditUserForm user={user} />
  return content
}

export default EditUserPage
