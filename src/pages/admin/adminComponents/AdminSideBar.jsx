import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Dashboard } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { useGetUsersQuery } from '../../../features/users/usersApiSlice'
import { useSendLogoutMutation } from '../../../features/auth/authApiSlice'
import { laptop } from '../../../assests/globalStyles/responsive'
import Loader from '../../../components/Loader'
import { FaUserAlt } from 'react-icons/fa'
import { Badge, Fab, Tooltip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import WebIcon from '@mui/icons-material/Web'
import GroupsIcon from '@mui/icons-material/Groups'
import LaptopIcon from '@mui/icons-material/Laptop'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import LogoutIcon from '@mui/icons-material/Logout'
import { useGetOrdersQuery } from '../../../features/orders/ordersApiSlice'

const Wrapper = styled.aside`
  position: fixed;
  background-image: linear-gradient(135deg, #6b73ff 10%, #000dff 100%);
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.2);
  width: 7em;
  height: 90vh;
  border-radius: 1em;
  top: 1em;
  left: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 0 0 0;
`

const Container = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${laptop({
    width: 'auto',
  })}
`
const ListItem = styled.li`
  margin: 0.5em;
  font-size: 4em;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.5 ease-in-out;
  ${laptop({
    fontSize: '3em',
  })}
`
const Admin = styled.section`
  display: flex;
  align-items: center;
  font-size: 0.5em;
  cursor: pointer;
  ${laptop({
    fontSize: '0.4em',
  })}
`
const AdminSideBar = () => {
  const { data: orders } = useGetOrdersQuery({
    refetchOnMountOrArgChange: true,
  })
  const numberOfOrders =
    orders?.ids?.length &&
    Object.values(orders?.entities).filter(
      (order) => order.status === 'waiting'
    ).length

  const { id } = useAuth()
  const { user } = useGetUsersQuery('users', {
    selectFromResult: ({ data }) => ({
      user: data?.entities[id],
    }),
  })
  const navigate = useNavigate()

  const onLogoutClicked = async () => {
    await sendLogout()
  }
  const [sendLogout, { isSuccess, isLoading, isError, error }] =
    useSendLogoutMutation()
  useEffect(() => {
    if (isSuccess) {
      navigate(`/`)
    }
  }, [isSuccess, navigate])

  if (isLoading) return <Loader />
  if (isError) return <p>{error?.data?.message}</p>

  return (
    <Wrapper>
      <Tooltip title="my account">
        <Admin onClick={() => navigate(`/admin/user/edit/${user.id}`)}>
          <FaUserAlt
            style={{ color: 'white', fontSize: '5em', margin: '1em 0 0 0' }}
          />
        </Admin>
      </Tooltip>
      <Tooltip title="logout">
        <Admin onClick={onLogoutClicked}>
          <LogoutIcon
            style={{ color: 'white', fontSize: '5em', margin: '1em 0 0 0' }}
          />
        </Admin>
      </Tooltip>
      <Container>
        <ListItem onClick={() => navigate('/admin')}>
          <Tooltip title="Dashboard">
            <Dashboard style={{ marginRight: '0.2em', fontSize: '.5em' }} />
          </Tooltip>
        </ListItem>
        <ListItem onClick={() => navigate('/')}>
          <Tooltip title="website home page">
            <WebIcon style={{ marginRight: '0.2em', fontSize: '.5em' }} />
          </Tooltip>
        </ListItem>
        <ListItem onClick={() => navigate('/admin/users')}>
          <Tooltip title="users list">
            <GroupsIcon style={{ marginRight: '0.2em', fontSize: '.5em' }} />
          </Tooltip>
        </ListItem>
        <ListItem onClick={() => navigate('/admin/products')}>
          <Tooltip title="products list">
            <LaptopIcon style={{ marginRight: '0.2em', fontSize: '.5em' }} />
          </Tooltip>
        </ListItem>
        <ListItem onClick={() => navigate('/admin/orders')}>
          <Tooltip title="orders list">
            <Badge
              badgeContent={numberOfOrders ? numberOfOrders : 0}
              color="success"
              showZero
            >
              <EmojiPeopleIcon
                style={{ marginRight: '0.2em', fontSize: '.5em' }}
              />
            </Badge>
          </Tooltip>
        </ListItem>
        <ListItem
          style={{ color: 'red', marginTop: '1em' }}
          onClick={() => navigate('/admin/product/create')}
        >
          <Tooltip title="add product">
            <Fab color="white" aria-label="add">
              <AddIcon />
            </Fab>
          </Tooltip>
        </ListItem>
      </Container>
    </Wrapper>
  )
}

export default AdminSideBar
