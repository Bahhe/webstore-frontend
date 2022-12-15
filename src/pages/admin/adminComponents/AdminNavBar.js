import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
import NotificationsIcon from '@mui/icons-material/Notifications'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  position: fixed;
  width: 100%;
  height: 8%;
  background-color: white;
`
const Right = styled.div``
const Title = styled.div`
  font-size: 2em;
  font-weight: 600;
  text-transform: capitalize;
`
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
`
const User = styled.div``
const ProfileImage = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 50%;
`
const Settings = styled.div``
const Notification = styled.div``

const AdminNavBar = () => {
  return (
    <Container>
      <Right>
        <Title>admin</Title>
      </Right>
      <Left>
        <Notification>
          <NotificationsIcon />
        </Notification>
        <Settings>
          <SettingsIcon />
        </Settings>
        <User>
          <ProfileImage src="https://images.unsplash.com/photo-1669383488518-3f367058d9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1947&q=80" />
        </User>
      </Left>
    </Container>
  )
}

export default AdminNavBar
