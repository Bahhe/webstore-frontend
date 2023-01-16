import React from "react"
import Loader from "../../../components/Loader"
import { useGetUserByIdQuery } from "../../users/usersApiSlice"
import { useParams } from "react-router-dom"
import UserForm from "./UserForm"

const UserPage = () => {
  const { id } = useParams()
  const {
    data: user,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetUserByIdQuery(id, {
    refetchOnMountOrArgChange: true,
  })

  let content
  if (isLoading) content = <Loader />
  if (isError) content = <p>{error?.data?.message}</p>
  if (isSuccess) content = <UserForm user={user} />

  return content
}

export default UserPage
